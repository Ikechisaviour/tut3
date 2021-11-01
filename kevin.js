
var mining_threads = 1

function checkWork() {
    if (txpool.status.pending > 0) {
        if (eth.mining) return;
        console.log("== Pending transactions! Mining...");
        miner.start();
    } else {
        miner.stop();  // This param means nothing
        console.log("== No transactions! Mining stopped.");
    }
}


eth.filter("latest", function(err, block) { checkWork(); });
eth.filter("pending", function(err, block) { checkWork(); });

checkWork();

