const EventEmitter = require("node:events");

class salaryCalculator extends EventEmitter {
    calculateSalary(basic, ta) {
        const hra = 0.2 * basic;
        const da = basic;
        const incomeTax = 0.3 * basic;
        const professionalTax = 200;

        const salary = basic + hra + da + ta - incomeTax - professionalTax;
        // Emit 'calculateSalary' event (corrected the event name)
        this.emit('calculateSalary', salary);
    }
}

const salaryCalculators = new salaryCalculator();


salaryCalculators.on('calculateSalary', (salary) => {
    console.log(`The calculated salary is : ${salary} Rs`);
});

// Call the method to trigger the event
salaryCalculators.calculateSalary(10000, 2000);
