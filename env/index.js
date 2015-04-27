var Ul = require("ul");

global.jxService = {
    paths: {
        projects: process.env.ENGINE_APPS || Ul.USER_DIR + "/engine_repos"
    },
    builder: {
        sub_elm_id_sep: "___",
        node_default: {
            client: {
                load: [],
                config: {},
                html: [],
                css: [],
                extFlow: [],
                flow: []
            },
            _service: {
                client: {
                    methods: {},
                    emits: {},
                    listens: {}
                },
                server: {
                    methods: {},
                    emits: {},
                    listens: {}
                }
            }
        }
    }
};
