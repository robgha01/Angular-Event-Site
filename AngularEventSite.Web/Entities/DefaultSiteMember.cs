namespace AngularEventSite.Web.Entities
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    using BlueLeet.Core.Extensions;

    using AngularEventSite.Web.Abstraction;
    using AngularEventSite.Web.Enums;
    using AngularEventSite.Web.MediaTypes;

    using Umbraco.Core.Models;
    using Umbraco.Core.Services;

    /// <inheritdoc/>
    public sealed class DefaultSiteMember : ISiteMember
    {
        private readonly IMediaService mediaService;

        /// <summary>
        /// Initializes a new instance of the <see cref="DefaultSiteMember"/> class.
        /// </summary>
        /// <param name="mediaService">
        /// The media service.
        /// </param>
        public DefaultSiteMember(IMediaService mediaService)
        {
            this.mediaService = mediaService;
        }

        /// <inheritdoc />
        public string AboutMe { get; set; }

        /// <inheritdoc/>
        public string Avatar { get; set; }

        /// <inheritdoc />
        public string Bio { get; set; }

        /// <inheritdoc />
        public string Company { get; set; }

        /// <inheritdoc/>
        public DateTime CreateDate { get; set; }

        /// <inheritdoc/>
        public bool DisableEmailNotifications { get; set; }

        /// <inheritdoc/>
        public string Email { get; set; }

        /// <inheritdoc/>
        public string FacebookAccessToken { get; set; }

        /// <inheritdoc/>
        public string FacebookId { get; set; }

        /// <inheritdoc/>
        public string FirstName { get; set; }

        /// <inheritdoc/>
        public Lazy<IEnumerable<IMemberGroup>> Groups { get; set; }

        /// <inheritdoc/>
        public bool HasAvatar { get; private set; }

        /// <inheritdoc/>
        public int Id { get; set; }

        /// <inheritdoc/>
        public bool IsApproved { get; set; }

        /// <inheritdoc/>
        public bool IsApprovedMember { get; set; }

        /// <inheritdoc />
        public bool IsEmailConfirmed { get; set; }

        /// <inheritdoc/>
        public bool IsLockedOut { get; set; }

        /// <inheritdoc/>
        public DateTime LastLoginDate { get; set; }

        /// <inheritdoc/>
        public string LastName { get; set; }

        /// <inheritdoc/>
        public LoginType LoginType { get; set; }

        /// <inheritdoc />
        public string MemberField { get; set; }

        /// <inheritdoc/>
        public string Name => $"{FirstName} {LastName}";

        /// <inheritdoc />
        public string Phone { get; set; }

        /// <inheritdoc />
        public IMemberProfileData ProfileData { get; set; }

        /// <inheritdoc/>
        public string SecurityToken { get; set; }

        /// <inheritdoc/>
        public DateTime? SecurityTokenExpireDate { get; set; }

        /// <inheritdoc/>
        public string Signature { get; set; }

        /// <inheritdoc/>
        public string UserName { get; set; }

        /// <inheritdoc />
        public IEnumerable<IMedia> GetPhotos()
        {
            var profilePhotos = mediaService.GetRootMedia().Where(x => x.Name.Equals(Email))
                .SelectMany(x => x.Descendants()).Where(x => x.ContentType.Alias.Equals(nameof(MemberImageType)));

            foreach (var media in profilePhotos)
            {
                yield return media;
            }
        }

        /// <inheritdoc/>
        public string GetProfileImage(int size)
        {
            if (!string.IsNullOrEmpty(Avatar))
            {
                HasAvatar = true;

                Uri uri;
                if (Uri.TryCreate(Avatar, UriKind.Absolute, out uri) == false)
                {
                    if (Uri.TryCreate(Avatar, UriKind.Relative, out uri))
                    {
                        var url = Avatar;
                        var index = Avatar.IndexOf("?", StringComparison.Ordinal);
                        if (index != -1)
                        {
                            url = url.Substring(0, index);
                        }

                        return VirtualPathUtility.ToAbsolute(
                            string.Concat("~/", url, string.Format("?width={0}&crop=0,0,{0},{0}", size)));
                    }

                    // Has an avatar image
                    return Avatar;
                }
            }
            else
            {
                HasAvatar = false;
            }

            return GetGravatarImage(Email, size);
        }

        private string GetGravatarImage(string email, int size)
        {
            return string.Format("http://www.gravatar.com/avatar/{0}?s={1}&d=mm", email.GetMd5Sum(), size);
        }
    }
}