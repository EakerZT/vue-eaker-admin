const OSS = require('ali-oss')
const path = require('path')
const fs = require('fs')
const p = process.argv.splice(2)
if (p.length !== 4) {
  console.log('参数错误')
  process.exit(1)
}
const client = new OSS({
  region: p[0],
  accessKeyId: p[1],
  accessKeySecret: p[2],
  bucket: p[3]
})

async function walkSync (currentDirPath, callback) {
  for (const name of fs.readdirSync(currentDirPath)) {
    const filePath = path.join(currentDirPath, name)
    const stat = fs.statSync(filePath)
    if (stat.isFile()) {
      await callback(filePath)
    } else if (stat.isDirectory()) {
      await walkSync(filePath, callback)
    }
  }
}

walkSync('./default', async (filepath) => {
  const remoteFilepath = filepath.replace('default', '').replace(/\\/g, '/')
  try {
    const result = await client.put(remoteFilepath, path.join(__dirname, filepath))
    if (result.res.status === 200) {
      console.log(`${remoteFilepath} 上传成功`)
    }
  } catch (e) {
    console.log(`${remoteFilepath} 上传失败:`)
    console.log(e)
  }
})
  .then(() => {
    console.log('上传完毕')
  })
