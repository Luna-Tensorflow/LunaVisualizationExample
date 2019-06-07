module.exports = function (t) {
    var placeholderVis = {name: "example", path: "example.html"};
    var types = ["ExampleClass"];
    if (types.includes(t.constructor)) {
        return [placeholderVis];
    }

    // handling lists of objects
    if (t.constructor == "List" && t.fields[0] && types.includes(t.fields[0])) {
        return [placeholderVis];
    }
    return [];
};
