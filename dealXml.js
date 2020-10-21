function getQASet(qno) {
  var xmlHttp = new XMLHTTPRequest();
  var qaSet = "";
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState != 4 || xmlHttp.status != 200) {
      return;
    }
    var xmlDoc = xmlHttp.responseXML.documentElement;
    var nodes = xmlDoc.getElementByTagName("item");
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].getElementByTagName("qno")[0].textContent == qno) {
        var question = nodes[i].getElementByTagName("question")[0].textContent;
        var answer = nodes[i].getElementByTagName("answer")[0].textContent;
        qaSet = qestion + "/" + answer;
        break;
      }
    }
  }
  xmlHttp.open("GET", "問題集.xml");
  xmlHttp.send();
  return qaSet;
}

function setQASet(question, answer) {
  var xmlHttp = new XMLHTTPRequest();
  var qno = 0;
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState != 4 || xmlHttp.status != 200) {
      return;
    }
    var xmlDoc = xmlHttp.responseXML.documentElement;
    var qNos = xmlDoc.getElementByTagName("qno");
    qno = qNos[qNos.length - 1].textContent + 1;
  }
  xmlHttp.open("POST", "問題集.xml");
  xmlHttp.setRequestHeader("Content-Type", text/xml);
  xmlHttp.send(crtXMLTagItem(qno, question, answer));
}

function crtXMLTagItem(qno, question, answer) {
  var xmlTagItem = "";
  xmlTagItem += "<item>";
  xmlTagItem += "<qno>";
  xmlTagItem += qno;
  xmlTagItem += "</qno>";
  xmlTagItem += "<question>";
  xmlTagItem += question;
  xmlTagItem += "</question>";
  xmlTagItem += "<answer>";
  xmlTagItem += answer;
  xmlTagItem += "</answer>";
  xmlTagItem += "</item>";
  return xmlTagItem;
}