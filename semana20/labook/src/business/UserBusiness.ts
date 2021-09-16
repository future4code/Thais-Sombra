import UserDB from "../data/UserDB";
import { SignupDTO, User, LoginDTO } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export default class UserBusiness {
    private userDatabase: UserDB;
    private hashManager: HashManager;
    private authenticator: Authenticator;

  constructor() {
    this.userDatabase = new UserDB();
    this.hashManager = new HashManager();
    this.authenticator = new Authenticator();
  }

  async signup (signupDTO: SignupDTO) {

    const verifyEmailDuplicity = await this.userDatabase.findUserByEmail(signupDTO.email);

    if(verifyEmailDuplicity){
      throw new Error('Email já cadastrado, informe um novo e-mail ou realize o login')
    };
   
    const randomId = new IdGenerator().generateId();

    const passwordHash = await this.hashManager.hash(signupDTO.password);

    const userModel: User = {
      id: randomId,
      email: signupDTO.email,
      name: signupDTO.name,
      passwordHash: passwordHash
    };
  
    const savedUser = await this.userDatabase.insertUser(userModel);

    const token = this.authenticator.generateToken({id: savedUser.id});
    
    return {
      token: token,
      id: randomId,
      email: signupDTO.email,
      name: signupDTO.name,
    };

  };

  async login(loginDTO: LoginDTO) {

        const user = await this.userDatabase.findUserByEmail(loginDTO.email);
    
        if(!user) {
          throw new Error('Usuário não existe')
        };
    
        const isPasswordCorrect = await this.hashManager.compare(loginDTO.password, user.passwordHash);
    
        if(!isPasswordCorrect) {
          throw new Error('Senha incorreta!')
        };
    
        const token = this.authenticator.generateToken({id: user.id});
    
        return {
          token: token,
          user: user
        };
  };
};