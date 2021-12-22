const axios = require('axios');
async function fetchUserBalance(){
    const wallet = "erd1ss6u80ruas2phpmr82r42xnkd6rxy40g9jl69frppl4qez9w2jpsqj8x97";
    const url = `https://api.elrond.com/accounts/${wallet}`;
    const data = await axios.get(url);
    // 7371569019990000000 = 73715
    const balance = (data.data.balance)/1e15;
    console.log(`Balance: ${balance} EGLD`);
}

async function fetchUserTokenBalance(){
    const wallet = "erd1ss6u80ruas2phpmr82r42xnkd6rxy40g9jl69frppl4qez9w2jpsqj8x97";
    const url = `https://api.elrond.com/accounts/${wallet}/tokens?from=0&size=100`;
    const data = await axios.get(url);
    const res = data.data;
    for( let i in res){
        const name = res[i].name;
        const ticker = res[i].ticker;
        const decimals = res[i].decimals;
        const balance = res[i].balance/(Math.pow(10, decimals));
        console.log(`${name}: ${balance.toFixed(8)} ${ticker}`);
    }
}

fetchUserBalance();
fetchUserTokenBalance();
