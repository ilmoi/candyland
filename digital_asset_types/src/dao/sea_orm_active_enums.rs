//! SeaORM Entity. Generated by sea-orm-codegen 0.8.0

use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum, Serialize, Deserialize)]
#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "chain_mutability")]
pub enum ChainMutability {
    #[sea_orm(string_value = "immutable")]
    Immutable,
    #[sea_orm(string_value = "mutable")]
    Mutable,
    #[sea_orm(string_value = "unknown")]
    Unknown,
}
#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum, Serialize, Deserialize)]
#[sea_orm(
    rs_type = "String",
    db_type = "Enum",
    enum_name = "royalty_target_type"
)]
pub enum RoyaltyTargetType {
    #[sea_orm(string_value = "creators")]
    Creators,
    #[sea_orm(string_value = "fanout")]
    Fanout,
    #[sea_orm(string_value = "single")]
    Single,
    #[sea_orm(string_value = "unknown")]
    Unknown,
}
#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum, Serialize, Deserialize)]
#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "mutability")]
pub enum Mutability {
    #[sea_orm(string_value = "immutable")]
    Immutable,
    #[sea_orm(string_value = "mutable")]
    Mutable,
    #[sea_orm(string_value = "unknown")]
    Unknown,
}
#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum, Serialize, Deserialize)]
#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "owner_type")]
pub enum OwnerType {
    #[sea_orm(string_value = "single")]
    Single,
    #[sea_orm(string_value = "token")]
    Token,
    #[sea_orm(string_value = "unknown")]
    Unknown,
}
