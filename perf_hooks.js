
//onst { performance, PerformanceObserver } = require('perf_hooks');

/* const someFunction = () => {
    console.log('Hello World!');
}

const wrapped = performance.timerify(someFunction);

const obs = new PerformanceObserver((list) => {
    console.log(list.getEntries()[0].duration);

    performance.clearMarks();
    performance.clearMeasures();
    obs.disconnect();
})

obs.observe({ entryTypes: ['function'] });

// A performance timeline entry will be created
wrapped(); */

//Performance Observer entry list

/*const obs = new PerformanceObserver((perfObserverlist, observer) => {
    console.log(perfObserverlist.getEntries());
    performance.clearMarks();
    performance.clearMeasures();
    observer.disconnect();
})

obs.observe({ type: 'mark'});
performance.mark('test');
performance.mark('meow'); */

//Performnace Hook monitor event lopp delay

const { monitorEventLoopDelay } = require('perf_hooks');
const h = monitorEventLoopDelay({ resolution: 20});

h.enable();
h.disable();
console.log(h.min);
console.log(h.max);
console.log(h.mean);
console.log(h.stddev);
console.log(h.percentiles);
console.log(h.percentile(50));
console.log(h.percentile(99));