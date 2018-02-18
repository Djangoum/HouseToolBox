﻿// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

namespace IdentityServer4.Quickstart.UI
{
    public static class ConsentOptions
    {
        private const bool enableOfflineAccess = true;
        private const string offlineAccessDisplayName = "Offline Access";
        private const string offlineAccessDescription = "Access to your applications and resources, even when you are offline";

        public static readonly string MustChooseOneErrorMessage = "You must pick at least one permission";
        public static readonly string InvalidSelectionErrorMessage = "Invalid selection";

        public static bool EnableOfflineAccess => enableOfflineAccess;

        public static string OfflineAccessDisplayName => offlineAccessDisplayName;

        public static string OfflineAccessDescription => offlineAccessDescription;
    }
}