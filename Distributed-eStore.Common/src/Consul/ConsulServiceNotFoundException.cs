using System;

namespace DistributedEStore.Common.Consul
{
    public class ConsulServiceNotFoundException : Exception
    {
        public string ServiceName { get; set; }
        
        public ConsulServiceNotFoundException(string serviceName) : this(string.Empty, serviceName)
        {
        }

        public ConsulServiceNotFoundException(string message, string serviceName) : base(message)
        {
            ServiceName = serviceName;
        }
    }
}