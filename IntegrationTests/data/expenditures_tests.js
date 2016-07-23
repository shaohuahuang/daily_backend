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
	});

	describe('test update item', () => {
		var expenditure = {
			item: "Test",
			amount: 120,
			update_on: new Date("2016-07-24")
		};
		it('full update', (done)=>{
			expenditureAPI.addItem(expenditure).then(result=>{
				var update = {
					item: "Test 1",
					amount: 121,
					update_on: new Date("2017-07-23")
				};
				return expenditureAPI.updateItem(result.id, update).then(result=>{
					assert.equal(result.item, update.item);
					assert.equal(result.amount, update.amount);
					assert.equal(result.update_on.getFullYear(), 2017);
					return expenditureAPI.deleteItem(result.id).then(()=>{
						done();
					})
				});
			})
		});

		it('partial update', (done)=>{
			expenditureAPI.addItem(expenditure).then(result=>{
				var update = {
					item: "Test 1",
					amount: 121
				};
				return expenditureAPI.updateItem(result.id, update).then(result=>{
					assert.equal(result.item, update.item);
					assert.equal(result.amount, update.amount);
					assert.equal(result.update_on.getFullYear(), 2016);
					return expenditureAPI.deleteItem(result.id).then(()=>{
						done();
					})
				});
			})
		});
	});

	it('test getAllItems', (done)=>{
		var start = "2016-05-20";
		var end = "2016-08-20";
		expenditureAPI.getAllItems(start,end).then(function(items){
			assert.equal(items.length, 4);
			done();
		})
	})
});