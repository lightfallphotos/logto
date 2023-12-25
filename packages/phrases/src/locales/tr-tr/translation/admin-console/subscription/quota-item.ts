const quota_item = {
  tenant_limit: {
    name: 'Kiracilar',
    limited: '{{count, number}} kiracı',
    limited_other: '{{count, number}} kiracılar',
    unlimited: 'Sınırsız kiracılar',
    not_eligible: 'Kiracılarınızı kaldırın',
  },
  mau_limit: {
    name: 'Aylık aktif kullanıcılar',
    limited: '{{count, number}} MAU',
    unlimited: 'Sınırsız MAU',
    not_eligible: 'Tüm kullanıcılarınızı kaldırın',
  },
  token_limit: {
    name: 'Tokenlar',
    limited: '{{count, number}} token',
    limited_other: '{{count, number}} tokenlar',
    unlimited: 'Sınırsız tokenlar',
    not_eligible: 'Yeni tokenları önlemek için tüm kullanıcılarınızı kaldırın',
  },
  applications_limit: {
    name: 'Uygulamalar',
    limited: '{{count, number}} uygulama',
    limited_other: '{{count, number}} uygulamalar',
    unlimited: 'Sınırsız uygulamalar',
    not_eligible: 'Uygulamalarınızı kaldırın',
  },
  machine_to_machine_limit: {
    name: 'Makineye makine',
    limited: '{{count, number}} makineye makine uygulama',
    limited_other: '{{count, number}} makineye makine uygulamalar',
    unlimited: 'Sınırsız makineye makine uygulamalar',
    not_eligible: 'Makineye makine uygulamalarınızı kaldırın',
    /** UNTRANSLATED */
    add_on: 'Additional machine-to-machine apps',
  },
  resources_limit: {
    name: 'API kaynakları',
    limited: '{{count, number}} API kaynak',
    limited_other: '{{count, number}} API kaynakları',
    unlimited: 'Sınırsız API kaynakları',
    not_eligible: 'API kaynaklarınızı kaldırın',
  },
  scopes_per_resource_limit: {
    name: 'Kaynak izinleri',
    limited: '{{count, number}} izin kaynak başına',
    limited_other: '{{count, number}} izinler kaynak başına',
    unlimited: 'Sınırsız izin kaynak başına',
    not_eligible: 'Kaynak izinlerinizi kaldırın',
  },
  custom_domain_enabled: {
    name: 'Özel alan adı',
    limited: 'Özel alan adı',
    unlimited: 'Özel alan adı',
    not_eligible: 'Özel alan adınızı kaldırın',
  },
  omni_sign_in_enabled: {
    name: 'Omni oturumu aç',
    limited: 'Omni oturumu aç',
    unlimited: 'Omni oturumu aç',
    not_eligible: 'Omni oturumunu devre dışı bırakın',
  },
  built_in_email_connector_enabled: {
    name: 'Dahili e-posta bağlayıcı',
    limited: 'Dahili e-posta bağlayıcı',
    unlimited: 'Dahili e-posta bağlayıcı',
    not_eligible: 'Dahili e-posta bağlayıcınızı kaldırın',
  },
  social_connectors_limit: {
    name: 'Sosyal bağlayıcılar',
    limited: '{{count, number}} sosyal bağlayıcı',
    limited_other: '{{count, number}} sosyal bağlayıcılar',
    unlimited: 'Sınırsız sosyal bağlayıcılar',
    not_eligible: 'Sosyal bağlayıcılarınızı kaldırın',
  },
  standard_connectors_limit: {
    name: 'Ücretsiz standart bağlayıcılar',
    limited: '{{count, number}} ücretsiz standart bağlayıcı',
    limited_other: '{{count, number}} ücretsiz standart bağlayıcılar',
    unlimited: 'Sınırsız standart bağlayıcılar',
    not_eligible: 'Standart bağlayıcılarınızı kaldırın',
  },
  roles_limit: {
    name: 'Roller',
    limited: '{{count, number}} rol',
    limited_other: '{{count, number}} roller',
    unlimited: 'Sınırsız roller',
    not_eligible: 'Rollerinizi kaldırın',
  },
  machine_to_machine_roles_limit: {
    name: 'Makineye makine rolleri',
    limited: '{{count, number}} makineye makine rolü',
    limited_other: '{{count, number}} makineye makine rolleri',
    unlimited: 'Sınırsız makineye makine rolleri',
    not_eligible: 'Makineye makine rollerinizi kaldırın',
  },
  scopes_per_role_limit: {
    name: 'Rol izinleri',
    limited: '{{count, number}} izin rol başına',
    limited_other: '{{count, number}} izinler rol başına',
    unlimited: 'Sınırsız izin rol başına',
    not_eligible: 'Rol izinlerinizi kaldırın',
  },
  hooks_limit: {
    name: 'Webhooks',
    limited: '{{count, number}} webhook',
    limited_other: '{{count, number}} webhooks',
    unlimited: 'Sınırsız webhooklar',
    not_eligible: 'Webhooklarınızı kaldırın',
  },
  organizations_enabled: {
    name: 'Organizasyonlar',
    limited: 'Organizasyonlar',
    unlimited: 'Organizasyonlar',
    not_eligible: 'Organizasyonlarınızı kaldırın',
  },
  audit_logs_retention_days: {
    name: 'Denetim günlükleri saklama süresi',
    limited: 'Denetim günlükleri saklama süresi: {{count, number}} gün',
    limited_other: 'Denetim günlükleri saklama süresi: {{count, number}} gün',
    unlimited: 'Sınırsız günler',
    not_eligible: 'Denetim günlüğünüz yok',
  },
  community_support_enabled: {
    name: 'Topluluk desteği',
    limited: 'Topluluk desteği',
    unlimited: 'Topluluk desteği',
    not_eligible: 'Topluluk desteği yok',
  },
  customer_ticket_support: {
    name: 'Müşteri destek bileti',
    limited: '{{count, number}} saat müşteri destek bileti',
    limited_other: '{{count, number}} saat müşteri destek bileti',
    unlimited: 'Müşteri destek bileti',
    not_eligible: 'Müşteri destek bileti yok',
  },
  email_ticket_support: {
    /** UNTRANSLATED */
    name: 'Email ticket support',
    /** UNTRANSLATED */
    limited: '{{count, number}} hour email ticket support',
    /** UNTRANSLATED */
    limited_other: '{{count, number}} hours email ticket support',
    /** UNTRANSLATED */
    unlimited: 'Email ticket support',
    /** UNTRANSLATED */
    not_eligible: 'No email ticket support',
  },
  mfa_enabled: {
    name: 'MFA',
    limited: 'MFA',
    unlimited: 'MFA',
    /** UNTRANSLATED */
    not_eligible: 'Remove your MFA',
  },
  sso_enabled: {
    name: 'Kurumsal SSO',
    limited: 'Kurumsal SSO',
    unlimited: 'Kurumsal SSO',
    /** UNTRANSLATED */
    not_eligible: 'Remove your Enterprise SSO',
  },
};

export default Object.freeze(quota_item);
