# Advanced JavaScript Practice Projects

A collection of JavaScript files covering advanced frontend/backend JavaScript concepts including closures, prototypes, promises, async/await, web workers, event propagation, and more.

## 📁 Project Structure

```
Advanced JS/
├── array.js                  # Array .reduce() method example
├── async_await.js            # Async/await with Promises (enrollment flow)
├── async_with_callback.js    # Callback-based async operations
├── call_apply_bind.js        # call(), apply(), bind() and 'this' keyword
├── closure.js                # JavaScript closures example
├── cookie.js                 # Browser cookie set/get functions
├── distructure.js            # Object destructuring with renaming
├── eventPropagation.js       # Event capturing and bubbling
├── for_of_loop.js            # for...of loop and Symbol.iterator
├── index.html                # HTML demo for eventPropagation.js
├── kaj.js                    # Web worker script (heavy computation)
├── map.js                    # Map object creation and iteration
├── playground.js             # Object.groupBy() example
├── promise.js                # Promise chaining with .then() and .catch()
├── prototype.js              # Prototype inheritance and __proto__
├── set.js                    # Set object and instanceof check
├── web_worker.js             # Web Worker API (start/stop worker)
└── README.md                 # This file
```

## 📖 File Descriptions

| File | Concept | Description |
|------|---------|-------------|
| `array.js` | Array Methods | Uses `.reduce()` to sum an array of numbers `[10, 20, 30]` |
| `async_await.js` | Async/Await | Chains async operations (enroll → progress → certificate) using `async`/`await` and `try/catch` |
| `async_with_callback.js` | Callbacks | Same enrollment flow implemented with traditional callback functions |
| `call_apply_bind.js` | `this` context | Demonstrates `Function.prototype.call()`, `apply()`, and `bind()` |
| `closure.js` | Closures | Inner function accessing variables from outer function scope |
| `cookie.js` | Browser Cookies | `setCookie()` and `getCookie()` helper functions using `document.cookie` |
| `distructure.js` | Destructuring | Object destructuring with property renaming (`email: Gmail`) |
| `eventPropagation.js` | DOM Events | Event capturing (parent → child) vs bubbling (child → parent) |
| `for_of_loop.js` | Iteration | Manual iteration using `Symbol.iterator` and `iterator.next()` |
| `index.html` | HTML Demo | Simple HTML page with styled div/form/button, loads `eventPropagation.js` |
| `kaj.js` | Web Workers | Runs a CPU-intensive loop and posts result via `postMessage()` |
| `map.js` | Map | Creates a `Map` and iterates over key-value pairs |
| `playground.js` | Object.groupBy | Groups an array of objects by a property using `Object.groupBy()` |
| `promise.js` | Promises | Chains promises with `.then()` and handles errors with `.catch()` |
| `prototype.js` | Prototypes | Constructor function, `Person.prototype`, and `__proto__` chain |
| `set.js` | Set | Creates a `Set` and checks type with `instanceof Set` |
| `web_worker.js` | Web Workers | Starts/stops a Web Worker, handles `onmessage` and `onerror` |

## 🚀 How to Run

### Pure JavaScript Files
Most `.js` files can be run directly in Node.js:

```bash
node array.js
node promise.js
node closure.js
# etc.
```

### Browser-Based Files
Some files require a browser environment:

- **`index.html`** — Open in a browser to see event propagation in action
- **`cookie.js`**, **`eventPropagation.js`** — Require DOM (`document`, `window`)
- **`web_worker.js`** + **`kaj.js`** — Open the HTML page that hosts the worker (Web Workers need a served context, not `file://`)

## 🛠️ Concepts Covered

- **Functions & `this`**: `call`, `apply`, `bind`
- **Asynchronous JS**: Callbacks, Promises, `async`/`await`
- **Object-Oriented JS**: Prototypes, constructor functions, `__proto__`
- **Modern JS**: `Object.groupBy()`, `Map`, `Set`, destructuring, `Symbol.iterator`
- **Browser APIs**: Cookies, DOM events (capturing/bubbling), Web Workers
- **Array Methods**: `.reduce()`, `.forEach()` patterns

---