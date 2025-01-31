

userIds=[1,2,7]

function logUserIds(userIds) 
{
    userIds.forEach(function(userId) 
    {
        console.log(userId);
    });
   return true; // ✅ return from the logUserIds function
}


logUserIds(userIds)
