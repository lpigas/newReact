var data = {
    'params': {
        'last_name': {
            'property_xxc': 'abcd',
            'sort_index': 2
        },
        '1': {
            'property_erw': 'abcd',
            'sort_index': 5
        },
        '2': {
            'property_xxc': 'abcd',
            'sort_index': 3
        }
    }
};



var result = Object.keys(data.params).sort(function (a, b) {
    return data.params[b].sort_index - data.params[a].sort_index;
})




console.log(data.last_name.sort_index)

export default result