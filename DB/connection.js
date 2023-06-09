const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://dobob777:dobob777@nodeapi.nfsdvq5.mongodb.net/nodeAPI?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => {
    console.log('DB...Connected....');
}).catch((error) => {
    console.log('error::: ', error);
})