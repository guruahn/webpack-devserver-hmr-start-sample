#!/usr/bin/env bash

#cli via http://docs.aws.amazon.com/cli/latest/userguide/using-s3-commands.html
#cli cloud invalidation http://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter30/08

BUCKET={your aws bucket}
SOURCE_DIR={upload dir name}

export AWS_ACCESS_KEY_ID={your aws access key id}
export AWS_SECRET_ACCESS_KEY={your aws secret access key}
export AWS_DEFAULT_REGION={your aws default region}



echo "Removing all files on bucket"
aws s3 rm s3://${BUCKET} --recursive


echo "Attempting to upload site .."
echo "Command:  aws s3  sync $SOURCE_DIR s3://$BUCKET/"
aws s3  sync ${SOURCE_DIR} s3://${BUCKET}/ --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
echo "S3 Upload complete"

echo "Invalidating cloudfront distribution to get fresh cache"
aws cloudfront create-invalidation --distribution-id {your distribution-id} --invalidation-batch '{ "Paths": { "Quantity": 3, "Items": [ "/index.html", "/bundle.js", "/bundle.js.map" ] }, "CallerReference": "ExampleInvalidation1" }'

echo "Deployment complete"
