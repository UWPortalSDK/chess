// CREATE TABLE
function createTable() {
    var result = {};
    var queryResult = db.Execute("SELECT TOP 1 * FROM gameTable");
    var row = JSON.parse(queryResult);
    if (row.length > 0 && typeof row[0].Error != "undefined") {
        db.Execute("CREATE TABLE gameTable(id INTEGER PRIMARY KEY IDENTITY(1,1), blackPlayer nvarchar(50), whitePlayer nvarchar(50), startTime nvarchar(50), endtTime nvarchar(50), moveTimeLimit nvarchar(50), currentFEN nvarchar(50), currentPGN nvarchar(50));");
        db.Execute("INSERT INTO gameTable VALUES('jradman', 'jradman', 'startTime', 'endtTime', 'moveTimeLimit', '1k2rb1r/pp3ppp/2np4/8/5B2/5P1P/PPP3BP/RN3K1R b - - 0 19', '')");
        db.Execute("INSERT INTO gameTable VALUES('jradman', 'jradman', 'startTime', 'endtTime', 'moveTimeLimit', '1k2rb1r/pp3ppp/2np4/8/5B2/5P1P/PPP3BP/RN3K1R b - - 0 19', '')");
        db.Execute("INSERT INTO gameTable VALUES('jradman', 'jradman', 'startTime', 'endtTime', 'moveTimeLimit', '1k2rb1r/pp3ppp/2np4/8/5B2/5P1P/PPP3BP/RN3K1R b - - 0 19', '')");
        result = '{"status":"tableCreated"}';
    } else
        result = '{"status":"tableExist"}';
    return JSON.stringify(result);
}
// CREATE TABLE

// Retreive data from the database
function getData() {
    createTable();
    var queryResult = db.Execute('SELECT * FROM gameTable');
    var rows = JSON.parse(queryResult);
    if (rows.length > 0 && typeof rows[0].Error != 'undefined') {
        return '{"status":"noTable"}';
    }
    return queryResult;
}

// INSERT INTO THE DATABASE
function insert() {
    if (args.Get("value").length > 50)
        return '{"result":"error"}';
    else {
        db.Execute("INSERT INTO gameTable VALUES('jradman', 'jradman', 'startTime', 'endtTime', 'moveTimeLimit', '1k2rb1r/pp3ppp/2np4/8/5B2/5P1P/PPP3BP/RN3K1R b - - 0 19', '')");
        return getData();
    }
}
// INSERT INTO THE DATABASE
