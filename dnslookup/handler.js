else if (msg.body.startsWith("!dnslookup ")) { // Dnslookup Module

    msg.delete(true)
    var data = await dnslookup.mainF(msg.body.replace("!dnslookup ", ""))
    if (data == "error") {
        client.sendMessage(msg.to, `🙇‍♂️ *Error*\n\n` + "```Something Unexpected Happened while Lookup the Dns```")
    } else {
        client.sendMessage(msg.to, `*Result for ${msg.body.replace("!dnslookup ","")} 👇*\n\n` + "```" + data + "```")
    }

}