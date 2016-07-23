var expenditureAPI = require('../../data/expenditure');
import {assert} from 'chai';

describe("test expenditure", ()=>{
	it('test add item', (done)=>{
		var expenditure = {
			item: "Test",
			amount: 120,
			update_on: new Date("2016-07-23")
		};
		expenditureAPI.addItem(expenditure).then(result=>{
			assert.equal(result.item, expenditure.item);
			assert.equal(result.amount, expenditure.amount);
			assert.equal(result.update_on.getFullYear(), 2016);
			expenditureAPI.deleteItem(result.id).then(function () {
				done();
			})
		});
	})
});