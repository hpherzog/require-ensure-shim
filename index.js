
if(typeof(require.ensure) !== "function")
{
    require.ensure = function(modules, callback)
    {
        callback(require);
    }
}