! function() {

  generateArcs = function(divitions){
    var total_values = {}
    itemized_values = []

    var count = 0;


    for (pos = 0; parseInt(pos*100) < parseInt(2 * Math.PI*100) ; pos = pos + 2 * Math.PI / divitions) {

      value = Math.random() * 300

      itemized_values.push({
        "pos": pos,
        "count": count,
        "item": 'nothing',
        "itemIndex": 0,
        "value": value,
        "previousValue": 0,
        "transparency": 0.5,
        "delay": count / divitions * 1000,
        "divitions": divitions
      })
      count++;


    }
    console.log(itemized_values.length)
  }


}()
