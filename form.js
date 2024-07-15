
        let saveFile = () => {
            // Get the data from each element on the form.
            const name = document.getElementById("w3lName");
            const subject = document.getElementById("w3lSubect");
            const email = document.getElementById("w3lSender");
            const number = document.getElementById("w3lPhone");
            const msg = document.getElementById("w3lMessage");

            // This variable stores all the data.
            let data = "\r Name: " + name.value + " \r\n " + "Subject: " + subject.value + " \r\n " + "Email: " + email.value + " \r\n " + "Phone Number: " + number.value + " \r\n " + "Message: " + msg.value;
            console.log(data); //printing form data into the console
            // Convert the text to BLOB.
            const textToBLOB = new Blob([data], { type: "text/plain" });
            var filename = new Date();
            var month =new Date(); //months from 1-12
            month = month.getMonth();

            var day = new Date();
            var day = day.getUTCDate();

            var year = new Date();
            var year = year.getUTCFullYear();

            newdate = year + "/" + month + "/" + day;
            const sFileName = filename; // The file to save the data.

            let newLink = document.createElement("a");
            newLink.download = new Date();

            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            } else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
            }

            newLink.click();
        };


          