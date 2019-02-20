import {observable} from 'mobx';

class Varient {
	@observable
	varientName: string;

	@observable
	price: number;

	@observable
	quantity: number;

	constructor(varient?: any) {
		if (varient) {
			this.varientName = varient.varientName;
			this.price = varient.price;
			this.quantity = varient.quantity;
		}
	}
}

export default Varient;
