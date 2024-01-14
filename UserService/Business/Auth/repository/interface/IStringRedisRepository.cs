using user_service.auth.entity;

namespace user_service
{
    namespace auth
    {
        namespace repository
        {
            public interface IStringRedisRepository
            {
                bool InsertRedis(RedisModel model, TimeSpan? expiry = null);
                bool DeleteRedis(string key);
                string? GetStringById(string key);
            }
        }
    }
}