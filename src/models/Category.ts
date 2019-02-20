import {observable} from 'mobx';
import Varient from './Varient';

export default class Category {
	@observable
	name: string;

	@observable
	subCatergories?: Category[];

	@observable
	varients?: Varient[];

	constructor(category?: any) {
		if (category) {
			this.name = category.name;
			this.subCatergories = category.subCatergory ? category.subCatergory : [];
			this.varients = category.varients ? category.varients : [];
		}
	}
}
