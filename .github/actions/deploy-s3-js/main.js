import * as core from '@actions/core';
import * as exec from '@actions/exec';

function run() {
    core.notice('--------');
    // get input
    const bucketName = core.getInput('bucket-name', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const distFolder = core.getInput('dist-folder', {required: true});

    //upload files
    const s3Uri = `s3;//${bucketName}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    core.notice('========');
}

run();
