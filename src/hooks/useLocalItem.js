import React, { useState } from 'react';

function useLocalItem(id, newTime, data = 'allItems') {
	const [ item, setItem ] = useState(JSON.parse(localStorage.getItem(data)).find((item) => id === item.id));
	// setItem((i) => ({...i, time: newTime}))
	//create useUpdateLocalItem

	return [ item, updateTime ];
}

export default useLocalItem;
