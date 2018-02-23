export default class View {
    constructor(model, controller) {
        this.model = model;
        this.controller = controller;

        this.attachHandlers();
        this.render();
        //this.setState = this.model.setState.bind(this);
        this.setState = function (obj) {
            const self = this;
            this.model.setState(obj, self);
        }

        Object.keys(this.model.state).forEach(key => this.model.observe(key, this));
    }

    attachHandlers() {
    }

    render() {
    }
}