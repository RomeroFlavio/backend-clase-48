
const sisInfo = {
    getInfo: (req, res) => {
        const { argv, execPath, platform, version, pid, memoryUsage, cwd } = process;
        const { rss , CPUs } = memoryUsage();
        res.render("info", {
          layout: "main",
          argv,
          execPath,
          platform,
          version,
          pid,
          rss,
          CPUs,
          currentDir: cwd(),
        });
    },
}

module.exports = sisInfo