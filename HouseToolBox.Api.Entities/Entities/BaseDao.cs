namespace HouseToolBox.Api.Models.Entities
{
    public class BaseDao<TKey>
    {
        public TKey Id { get; set; }
    }
}