var a = 20; 

{
    let a = 30;
    console.log("The value of a in the block level: " + a); 
}

console.log("The value of a in the global level: " + a); 

const b = 10;
                        // b = 25;  TypeError: Assignment to constant variable.
                        //     at Object.<anonymous> (C:\22b81a12c2_awt\04-01-2025\keywords.js:11:3)
                        //     at Module._compile (node:internal/modules/cjs/loader:1565:14)
                        //     at Object..js (node:internal/modules/cjs/loader:1708:10)
                        //     at Module.load (node:internal/modules/cjs/loader:1318:32)
                        //     at Function._load (node:internal/modules/cjs/loader:1128:12)
                        //     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
                        //     at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)
                        //     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
                        //     at node:internal/main/run_main_module:36:49
console.log("The value of b: "+b);
