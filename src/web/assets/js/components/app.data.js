export default () => ({
    ready: false,

    init() {
        this.ready = ! this.ready;
    },
});
