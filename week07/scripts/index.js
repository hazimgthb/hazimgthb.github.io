let app = new Vue({
    el: "#app",
    data: {
        message: " Hello Veu!"
    }
});

let app2 = new Vue({
    el: "#app2",
    data: {
        message: "you loaded this page on" + new Date().toLocaleString(),
        linkURL: "https://bbc.in/2LAnJs8",
        linkText: "Google is Down!"
    }
});

let app3 = new Vue({
    el: "#app3",
    data: {
        seen: true
    }
});

let app4 = new Vue({
    el: "#app4",
    data: {
        todos: [
            {
                text: "Learn JavaScript"
            },
            {
                text: "Learn Vue"
            },
            {
                text: "Build Something awesome!"
            }
        ]

    }
});

let app5 = new Vue({
    el: "#app5",
    data: {
        message: "Ahmad Albab"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split(" ").reverse().join(" ");
        }
    }
});

let app6 = new Vue({
    el: "#app6",
    data: {
        message: "Hello Vue!"
    }
});