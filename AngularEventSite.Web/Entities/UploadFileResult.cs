namespace AngularEventSite.Web.Entities
{
    public class UploadFileResult
    {
        public string ErrorMessage { get; set; }

        public int MediaId { get; set; }

        public string UploadedFileName { get; set; }

        public string UploadedFileUrl { get; set; }

        public bool UploadSuccessful { get; set; }
    }
}