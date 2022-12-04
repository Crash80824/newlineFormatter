String.prototype.insert = function (index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substr(index);
  }

  return string + this;
};

let target = "长方形。句子。句子。";

for (let i = 0; ; i++) {
  if (i > 30) {
    break;
  }
  if (target[i] == "。") {
    target = target.insert(i + 1, "\n");
  }
  if (i >= target.length) {
    break;
  }
}

console.log(target);
