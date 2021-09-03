const users =
    [
    "16306069622680.15192359525836197",
 
    "16306858967340.8775202675459319",

    "16306885447030.8830066086456474",

    "16306885447030.8830066086456474",

    "16306858967340.8775202675459319",
    ]

const filteredIds = users.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
});

console.log(filteredIds)