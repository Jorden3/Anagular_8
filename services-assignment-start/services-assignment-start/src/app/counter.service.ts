export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveCounter() {
        this.activeToInactiveCounter++;
        console.log(`Inactive to Active: ${this.activeToInactiveCounter}`);
    }

    increamentInactiveCounter() {
        this.inactiveToActiveCounter++;
        console.log(`Active to inactive: ${this.inactiveToActiveCounter}`);
    }
}
