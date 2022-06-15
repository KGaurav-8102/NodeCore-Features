
const { performance, PerformanceObserver } = require('perf_hooks');

const someFunction = () => {
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
wrapped();