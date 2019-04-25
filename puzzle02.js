const boxIds = [
    "jplenqtlagxhivmwmscfukzodp",
    "jbrehqtlagxhivmeyscfuvzodp",
    "jbreaqtlagxzivmwysofukzodp",
    "jxrgnqtlagxhivmwyscfukwodp",
    "jbrenqtwagjhivmwysxfukzodp",
    "jbrenqplagxhivmwyscfuazoip",
    "jbrenqtlagxhivzwyscfldzodp",
    "jbrefqtlagxhizmwyfcfukzodp",
    "jbrenqtlagxhevmwfsafukzodp",
    "jbrunqtlagxrivmsyscfukzodp",
    "jbrenqtlaguhivmwyhlfukzodp",
    "jbrcnstsagxhivmwyscfukzodp",
    "jbrenqtlagozivmwyscbukzodp",
    "jbrenqwlagxhivswysrfukzodp",
    "jbrenstlagxhuvmiyscfukzodp",
    "jbranqtlhgxhivmwysnfukzodp",
    "jbrenqtvagxhinmxyscfukzodp",
    "jbrenqtlagdhivmwyscfukxody",
    "jbrenqtlagelavmwyscfukzodp",
    "jbrenqtlagxhtvmwyhcfukzbdp",
    "jbrenqwlagxhivmwyscfutzopp",
    "jbrenqtlavxhibmtyscfukzodp",
    "jbronqtlagxnivmwyscfuzzodp",
    "jbredqtlagxhppmwyscfukzodp",
    "jbrcnqtlogxhivmwysxfukzodp",
    "jbremqtlagehivswyscfukzodp",
    "jbrenqolagxhivmcyscfukzokp",
    "jbrehqtlacxhgvmwyscfukzodp",
    "fbrlnqtlagxhivmwyscbukzodp",
    "zbrfnqtlagxhivrwyscfukzodp",
    "jbregqtlagxnivmwyscfhkzodp",
    "jbrenqtllgxnivmwystfukzodp",
    "jurenqtlagxhivmwyscfulzoup",
    "jbrenitdagxhivmwyxcfukzodp",
    "jbrenqtlagxqivmwyscvuszodp",
    "jbqenqwlagxhivmwyscfckzodp",
    "jbrenqtlagxhivmwxscqupzodp",
    "jbrenqtlagxhivmwysciuqiodp",
    "jbrjnjtlagxhivmwyscfukzode",
    "jbrenqtlagxhuvmwqscfukzods",
    "jbrenqtlagxhuvmuyscfukzudp",
    "ibrenqtlagxhivmwyscfuktokp",
    "jbsenqtlagxhivcwyscfuksodp",
    "jbrfnntlagxhivmwnscfukzodp",
    "jzrenqulagxhivmwyscfukzodx",
    "jbrenqtqygxhivmwyscfukzwdp",
    "jbrenqtlagxfixmwyscfukzcdp",
    "jbrenqaoagxhivmwyshfukzodp",
    "jbrenqtlazxhivmworcfukzodp",
    "jbrenqtlagxhicowyscfukrodp",
    "jbrqnqtlagxhivzwyzcfukzodp",
    "jbrenqtlalxhuvxwyscfukzodp",
    "jbrenqtlqgxhhviwyscfukzodp",
    "jbrenqtuggxhivmoyscfukzodp",
    "jbrenqtlagxpivmwyscfukkodw",
    "zbrenqhlagxhivmwyscdukzodp",
    "jbrenutlagxxivmwyscfukzoqp",
    "obrenqtlagxhivmwxscfuszodp",
    "jbrenqtlagxhlvmwyscfuixodp",
    "rbrenqtlagdhixmwyscfukzodp",
    "jbrenqtlagxhivmwescfyszodp",
    "jbrfnqtlagxhivmwyscaukzhdp",
    "jbrenqtiagxhivmbyscfuxzodp",
    "cbrrnqtuagxhivmwyscfukzodp",
    "jbkenqtlagxhigmwysufukzodp",
    "jbjewqtlagxhivmwyscfuqzodp",
    "jbrznqtlagxvivmwyscfukzovp",
    "jbrenttlacxhivmwyscfhkzodp",
    "jblenqtlagxhivmwylcfukaodp",
    "jbrenqtlagxhivmqysiftkzodp",
    "jbrenqtlagwhikmwyscfukqodp",
    "jbrenqtlegxhivmwvsckukzodp",
    "jbrenqwzagxhiamwyscfukzodp",
    "jbrenqtlagxhivcwyscfgkzodc",
    "jbrenqtlagxxhvmwxscfukzodp",
    "jbrenqtlngxhivmwyscfukoowp",
    "jbreomtlagxhivmwpscfukzodp",
    "jfrenqtlagxhivmwyscnumzodp",
    "jbrenqtlagphipmwyscfukfodp",
    "jvrenqtlagxhivmwyscfmkzodw",
    "jbrenqtlaxxoiemwyscfukzodp",
    "jbrenqtlagxhivmwyscemkzpdp",
    "jbrenyjldgxhivmwyscfukzodp",
    "jbrenqtlagxhivfvyspfukzodp",
    "kbrenctlakxhivmwyscfukzodp",
    "jbrmhqtlagxhivmwyscfuizodp",
    "jbjenqtlagxlivmbyscfukzodp",
    "jbrenqtlaaxhivmmyshfukzodp",
    "jbronqtlagxhirmvyscfukzodp",
    "jbcrnqtlagxwivmwyscfukzodp",
    "jxrenszlagxhivmwyscfukzodp",
    "jbpenqtlagxhivmwyscfukkody",
    "jbrewqtlawxhivmwyscfukzhdp",
    "jbrenqylagxhivmwlxcfukzodp",
    "jbrenqtlagxxivtwywcfukzodp",
    "jbrenqtlagxhcvgayscfukzodp",
    "jbrenitlagxhivmwiscfukzohp",
    "jbrenutlagxhivmwyscbukvodp",
    "nbrenqtlagxhivmwysnfujzodp",
    "jbrenqtlagxhivmwyqcfupzoop",
    "jbrenqtrarxhijmwyscfukzodp",
    "jbrenqtlagxhivmwysdfukzovy",
    "jbrrnqtlagxhivmwyvcfukzocp",
    "jbrenqtlagxhivmwyscfuvzzhp",
    "jbhenitlagxhivmwysufukzodp",
    "jbrenqtlagxhivmwyscfuwzoqx",
    "kbrenqtlagxhivmwysqfdkzodp",
    "jbrenqtlagxhivmwyxmfukzodx",
    "jbcenatlagxxivmwyscfukzodp",
    "jbrenhtlagvhdvmwyscfukzodp",
    "jxrenqtlafxhivfwyscfukzodp",
    "jbreaztlpgxhivmwyscfukzodp",
    "tqrenqtlagxfivmwyscfukzodp",
    "jbrenqgllgxhwvmwyscfukzodp",
    "jbrejjtlagxhivmgyscfukzodp",
    "jbrenqtlagxhivmwyscvukzoqv",
    "jbrvnqtlagxsibmwyscfukzodp",
    "jbrenqttagxhuvmwyscfukvodp",
    "jbrenqteagxhivmwcscfukqodp",
    "jbrenqtsabxhivmwyspfukzodp",
    "jbbenqtlagxhivmwyscjukztdp",
    "jnrenqtlagxhiimwydcfukzodp",
    "jbrenqtlagxhfvmwyscxukzodu",
    "jbrenqtluyxhiomwyscfukzodp",
    "jbrenqvlagxhivmwyscuukzolp",
    "ebrenqtlagxnivmwysrfukzodp",
    "jbreeqtlatxhigmwyscfukzodp",
    "jbrenqtvxgxhivmwyscfukzedp",
    "jbrmnqtlagxhivmwywcfuklodp",
    "jbreeqtvagxhivmwyscfukzody",
    "jbrenptlagxhivmxyscfumzodp",
    "jbrenqtlagxhivmwysgfukzfsp",
    "jurenqtlagjhivmwkscfukzodp",
    "jbrenntlagxhivmwtscffkzodp",
    "jbrenqglagxhivmwyocfokzodp",
    "wbrenqtlagxhivmwhscfukiodp",
    "jbrenqtligxhivmqascfukzodp",
    "jbrenqtlagxhivmwxscfukpojp",
    "jurenqtlagxhivmmyscfbkzodp",
    "jbrenqtmagxhivmwyscfrbzodp",
    "jcrenqtlagxhivmwysefukzodm",
    "jbrenqtlagxhicmwywcfukzodl",
    "jbvanqtlagfhivmwyscfukzodp",
    "jbmenqjlagxhivmwyscfdkzodp",
    "jbrenqtlagohivvwysctukzodp",
    "jbrenqtdagxdivmwyscfckzodp",
    "kbrefqtlagxhivmwyscfuazodp",
    "jbrwnqtoagxhivmwyswfukzodp",
    "jjhenqtlagxhivmwyscfukzorp",
    "jbgsnqtlagxhivkwyscfukzodp",
    "jbrynqtlagxhivmsyspfukzodp",
    "jbrenftlmkxhivmwyscfukzodp",
    "nbrenqtxagxhmvmwyscfukzodp",
    "jbrunqtlagxhijmwysmfukzodp",
    "jbrenqtlagmaivmwyscfukzowp",
    "jbrerqtlagxhihmwyscfukzudp",
    "jbrenqtlagahivmwysckukzokp",
    "kbrenqtlagxhirmwyscfupzodp",
    "jbrrnqtlagxhivmwyecfukzodz",
    "jbrenqtlavxhivmwyscfusiodp",
    "jnrenqtlagxhivmwyhcfukzodw",
    "jbretqtlagfhivmwyscfukzrdp",
    "jbreoqtnagxhivmwyscfukzopp",
    "jbrenbtllgxhivmwsscfukzodp",
    "jbrenqtlmgxhivmwyscfuwzedp",
    "jbnenqtlagxhivbwyscfukzokp",
    "jbrenqslagxhivmvyscfukzndp",
    "jbrenqtlagxzivmwuscfukztdp",
    "gbrenqtlagxhyvmwyscfukjodp",
    "jbrenqteagxhivmwyscfuszedp",
    "jbrenqtlaglhivmwysafukkodp",
    "jbrenqtlagxhcvmwascfukzogp",
    "jbrenqtlagxhsvmkcscfukzodp",
    "jbrenqslbgxhivmwyscfufzodp",
    "cbrenqtlagxhivkwtscfukzodp",
    "jbrenqtltgxhivmzyscfukzodj",
    "jbrgnqtlagihivmwyycfukzodp",
    "vbrenqauagxhivmwyscfukzodp",
    "jbrqnqtlagjhivmwyscfqkzodp",
    "jbrenqtlakxhivmwyscfukvobp",
    "jcrenqelagxhivmwtscfukzodp",
    "jbrrnqtlagxhlvmwyscfukzodw",
    "jbrenqtlagxhivmwkscaumzodp",
    "jbrenqdlagxhivmiescfukzodp",
    "jhrenqtlagxhqvmwyscmukzodp",
    "jbrenqtlaghhivmwyscfukkoyp",
    "jowenqtlagxyivmwyscfukzodp",
    "jbrenitaagxhivmwyscfqkzodp",
    "jbrenqtlagxhivmwyscfnkbudp",
    "jbyenqtlagxhivmiyscfukzhdp",
    "jbrenitlagxhibjwyscfukzodp",
    "jbrenqtlavxhjvmwpscfukzodp",
    "jbrenqyaagxhivmwyscflkzodp",
    "jbrenqylagxhivmwyicfupzodp",
    "jbrenqtlagxmevmwylcfukzodp",
    "lbrenqtlagxhiqmwyscfikzodp",
    "jbrenqtnarxhivmwyscfmkzodp",
    "jbrenqtlamxhivmwyscfnkzorp",
    "jbbenqtlavxhivmwyscjukztdp",
    "jbrenqtlagxhivmwyscfnliodp",
    "jbwenetlagxhivmwyscfukzodt",
    "jbrenatlagxhivmwysmfujzodp",
    "jbrsnstlagxhivmwyscfukgodp",
    "jbwvnitlagxhivmwyscfukzodp",
    "jbrenqtbagxhkvmwypcfukzodp",
    "jbrlnqtlafxhivmwyscfukdodp",
    "jbrenztlanxhivmwyscjukzodp",
    "jbrepqtlagxhivmwudcfukzodp",
    "jbrenqtlagxiivmwdscfskzodp",
    "jbrdjqtlagxhivmwyschukzodp",
    "jbrenqtoaguhivmwyccfukzodp",
    "jdrexqjlagxhivmwyscfukzodp",
    "jbrenqtlagxhovmwysckukaodp",
    "pbrfnqblagxhivmwyscfukzodp",
    "jbrenqtlagxrivgiyscfukzodp",
    "jbrelqtgagxhivmryscfukzodp",
    "jbrenqtlagxhicmwjscfikzodp",
    "jbrenqjlagxhivmwyscfmkjodp",
    "jbrenqtlagxpivmwzscgukzodp",
    "jbienqzlagxpivmwyscfukzodp",
    "jbrenqvlagxhivmwdscfukzodx",
    "owrenqtlagxhivmwyicfukzodp",
    "gbrenqtlaathivmwyscfukzodp",
    "jbgenqtlafxhivmwysqfukzodp",
    "jbrenqtlagxhivtwsscfukzokp",
    "jbrnnqylanxhivmwyscfukzodp",
    "ebrenqolagxhivmcyscfukzodp",
    "jbrenqtlarnhivgwyscfukzodp",
    "jbmenqtlagxhivmvyscfukzgdp",
    "jbrevqtlaglhivmwystfukzodp",
    "jbrenqplanthivmwyscfukzodp",
    "jbrenqtlagxhivmkyscbukzosp",
    "jbrenqtlagxaivmwyscfugzodo",
    "jbrenqplagxhnvmwyscfjkzodp",
    "jbrenqtlagxhivgwyscfusrodp",
    "cbrenqtlagxhivmwysmfukzody",
    "jbrenquwaexhivmwyscfukzodp",
    "jbredqtlagxhdvmwyscfukzoup",
    "jbrxnqtlagxhivmwysczukaodp",
    "jbrenqtlafnhivmwyscfuczodp",
    "jbbdkqtlagxhivmwyscfukzodp",
    "ubrenqtlagxhivkwyucfukzodp",
    "ebjenqtlagxhivmwyscfukzodj",
    "jbgenqtlugxxivmwyscfukzodp",
    "jbrenqtoagxqivmwdscfukzodp",
    "bbeenqtlagxhivmwyscfumzodp",
    "jbfeeqtlagxhivmwmscfukzodp",
    "jbrlnqtlagxhiimwescfukzodp",
    "jbrenqtlagwoivmwyscfukhodp",
    "jbrenqtlagnhivmwyscfuszovp",
];

let boxesWith2 = 0;
let boxesWith3 = 0;

boxIds.forEach(boxId => {
   const letters = boxId.split('');
   let have2 = false;
   let have3 = false;
   for (let letterIndex = 0; letterIndex < letters.length; letterIndex++) {
       const letter = letters[letterIndex];
       let count = 0;
       for (let checkLetterIndex = 0; checkLetterIndex < letters.length; checkLetterIndex++) {
           if (letters[checkLetterIndex] == letter) {
               count++;
           }
       }
       if (count == 2) {
           have2 = true;
       } else if (count == 3) {
           have3 = true;
       }
   }

   if (have2) {
       boxesWith2++;
   }
   if (have3) {
       boxesWith3++;
   }
});

console.log(`boxesWith2: ${boxesWith2}, boxesWith3: ${boxesWith3}, ck: ${boxesWith2*boxesWith3}`);