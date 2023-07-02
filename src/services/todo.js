/**
 * Get the list of todo items.
 * @return {Array}
 */
import update from 'immutability-helper';

export function createNew(text) {
	return {
		text: text,
		completed: false
	}

}

export function updateStatus(items, itemId, completed) {
	console.log(itemId);
	console.log(items[itemId]);
	const updatedItem = items[itemId];
	updatedItem.completed = completed;
	items[itemId] = updatedItem;

	return items

	// // Returns a new list of data with updated item.
	// return update(items, {
	// 	[itemId]: {
	// 		completed: { $set: completed }
	// 	}
	// });
}
