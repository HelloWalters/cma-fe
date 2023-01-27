export interface Campaign{
  active?: boolean;
  name: string;
  dmId?: string;
  description?: string;
  tags?: string;
  createdAt?: string;
  modifiedAt?: string;
  version?: string;
  theme?: string;
}

export interface CampaignResponse{
  _id?: string;
  campaignName?: string;
  campaignDescription?: string;
  campaignTheme?: string;
  campaignTags?: string;
  __v?: string;
}

