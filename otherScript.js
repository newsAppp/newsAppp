b.value.forEach(i => console.log( (i.image?.thumbnail?.contentUrl ?? ' ') + '&w=400 ---- ' + (i.name ?? '') + '. ' + i.description) ) 
