type User = {
  id: number;
  name: string;
}
type SupportedEvents = {
  user_updated: (user: User) => any;
  user_logged_in: ({id}:{id:number})=> void;
}

type Listener = (...arg: any[]) => void;

class EventEmitter<T extends Record<string, Listener>> {
  public eventListeners: { [K in keyof T]?: Set<Listener> } = {};
  attachEvent<K extends keyof T>(event: K, callback: T[K]) {
    const listeners = this.eventListeners[event] ?? new Set();
    listeners.add(callback);
    this.eventListeners[event] = listeners;
    return () => {
      listeners.delete(callback);
    }
  }
  dispatch<K extends keyof T>(event: K, ...args: Parameters<T[K]>) {
    const listeners = this.eventListeners[event] ?? new Set();
    for (const listener of listeners) {
      listener(...args);
    }
  }
}

export const eventEmitter = new EventEmitter<SupportedEvents>();
eventEmitter.attachEvent("user_logged_in", function(params) {
  console.log(params);
});

eventEmitter.attachEvent("user_updated", function(user:User) {
  console.log(user);
});

eventEmitter.dispatch("user_logged_in", {id: 1});
eventEmitter.dispatch("user_updated", {id: 1, name:"AAA"});
