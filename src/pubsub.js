export default class PubSub {
  constructor() {
    this.topics = {}
  }

  hop(topic) {
    return this.topics.HasOwnProperty(topic)
  }

  subscribe(topic, handler) {
    if(!this.hop(topic)) {
      this.topics[topic] = [];
    }

    let index = this.topics[topic].push(handler) -1;

    return {
      remove() {
        delete this.topics[topic][index]
      }
    }
  }

  publish(topic, info) {
    if(!this.hop(topic)) {
      return;
    }

    this.topics.forEach(item => {
      item(info != undefined ? info : {})
    })
  }
}
