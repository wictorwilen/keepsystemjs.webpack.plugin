function KeepSystemJs(options) {
}

KeepSystemJs.prototype.apply = function (compiler) {
    compiler.parser.plugin("call System.import", function (expr) {
        var param = this.evaluateExpression(expr.arguments[0]);
        return false;
    });
};

module.exports = KeepSystemJs;