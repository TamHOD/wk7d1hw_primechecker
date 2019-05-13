const PubSub = {

    publish: function (channel, payload) {
        console.log(`published on ${channel} payload: ${payload}`)
        const event = new CustomEvent(channel, {
            detail: payload
        });
        document.dispatchEvent(event);
    },

    subscribe: function (channel, callback) {
        console.log(`subbed to ${channel}`)
        document.addEventListener(channel, callback)
    }

}

module.exports = PubSub;