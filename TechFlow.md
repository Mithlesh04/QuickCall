

<!-- docs -->
1. client send request
    call "add" function

2. server recived the request
    server will check if "add" function is there or not
        if there 
            calling the "add" function
            "add" function return the callback function named "addReturnCb"

3. client recived the response
    after some time client is 
    calling the "addReturnCb"

4. server recived the request
   calling the "addReturnCb" function
   return data if there



<!-- technical docs -->
1. client will send= {
    transactionId: "abc",
    stackCount: 0 // no of request with this transaction id. stack count will start from 0
    type: "function"
    name: "add"
    arg: []
    action: "call"
}

2. server will recevied the data which client sended and will do this action
    if stackCount 0 then it's mean the request is init now 
        keeping the transaction data in Transaction storage
        {
            transactionId: "abc",
            startTimeStamp: Date.now()
            stackCount: 0, // if there are any return(including the nested return) then it will increate 
            stack: {
                type: "function"
                name: "add",
                target: function
                arg: [],
                action: "call",
                return: {
                    ...so on with same structure
                }
            }
        }
    if action is call then call the function and pass the arguments
    "add" function return the "addReturnCb"
    storing the callback
    now transaction storage will look like this
    {
        transactionId: "abc",
        startTimeStamp: Date.now()
        stackCount: 0,
        stack: { // stack count 0
            type: "function"
            name: "add",
            target: function add
            arg: [],
            action: "call",
            return: { // (stack count 1) as there is callback then at this point stackCount=2
                type: "function"
                name: "addReturnCb",
                target: function addReturnCb
                arg: [],
                action: "init", // as currently we are just keeping this so it will be "init". whenever this "addReturnCb" will called then action='call'
                return {
                }
            }
        }
    }

    server will send this structure to client
    {
        transactionId: "abc",
        stackCount: 1, // there was some return function
        return: "$${stack.return.target}.addReturnCb[]",
        type: "function"
    }

3. client recived the response
    {
        transactionId: "abc",
        stackCount: 1, 
        return: "$${stack.return.target}.addReturnCb[]",
        type: "function"
    }
    after some time client calling the "addReturnCb" with this struct
    {
        transactionId: "abc",
        stackCount: 1 // no of request with this transaction id.
        type: "function"
        name: "$${stack.return.target}.addReturnCb[]"
        arg: []
        action: "call"
    }



<!-- continue work from server.ts<handle the function if name will be qc function @QCFunctionHandler in if condition @is_QC_Signature> -->