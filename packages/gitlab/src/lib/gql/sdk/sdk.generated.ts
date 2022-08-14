import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A `AlertManagementHttpIntegrationID` is a global ID. It is encoded as a string.
   *
   * An example `AlertManagementHttpIntegrationID` is: `"gid://gitlab/AlertManagement::HttpIntegration/1"`.
   */
  AlertManagementHttpIntegrationID: any;
  /**
   * A `AwardableID` is a global ID. It is encoded as a string.
   *
   * An example `AwardableID` is: `"gid://gitlab/Awardable/1"`.
   */
  AwardableID: any;
  /**
   * Represents non-fractional signed whole numeric values. Since the value may
   * exceed the size of a 32-bit integer, it's encoded as a string.
   */
  BigInt: any;
  /**
   * A `BoardID` is a global ID. It is encoded as a string.
   *
   * An example `BoardID` is: `"gid://gitlab/Board/1"`.
   */
  BoardID: any;
  /**
   * A `CiBuildID` is a global ID. It is encoded as a string.
   *
   * An example `CiBuildID` is: `"gid://gitlab/Ci::Build/1"`.
   */
  CiBuildID: any;
  /**
   * A `CiPipelineID` is a global ID. It is encoded as a string.
   *
   * An example `CiPipelineID` is: `"gid://gitlab/Ci::Pipeline/1"`.
   */
  CiPipelineID: any;
  /**
   * A `CiRunnerID` is a global ID. It is encoded as a string.
   *
   * An example `CiRunnerID` is: `"gid://gitlab/Ci::Runner/1"`.
   */
  CiRunnerID: any;
  /**
   * A `ClustersAgentID` is a global ID. It is encoded as a string.
   *
   * An example `ClustersAgentID` is: `"gid://gitlab/Clusters::Agent/1"`.
   */
  ClustersAgentID: any;
  /**
   * A `ClustersAgentTokenID` is a global ID. It is encoded as a string.
   *
   * An example `ClustersAgentTokenID` is: `"gid://gitlab/Clusters::AgentToken/1"`.
   */
  ClustersAgentTokenID: any;
  /**
   * A `ClustersClusterID` is a global ID. It is encoded as a string.
   *
   * An example `ClustersClusterID` is: `"gid://gitlab/Clusters::Cluster/1"`.
   */
  ClustersClusterID: any;
  /**
   * Color represented as a hex code or named color.
   *
   * For example: "#fefefe".
   */
  Color: any;
  /**
   * A `ContainerRepositoryID` is a global ID. It is encoded as a string.
   *
   * An example `ContainerRepositoryID` is: `"gid://gitlab/ContainerRepository/1"`.
   */
  ContainerRepositoryID: any;
  /**
   * A `CustomEmojiID` is a global ID. It is encoded as a string.
   *
   * An example `CustomEmojiID` is: `"gid://gitlab/CustomEmoji/1"`.
   */
  CustomEmojiID: any;
  /**
   * A `CustomerRelationsContactID` is a global ID. It is encoded as a string.
   *
   * An example `CustomerRelationsContactID` is: `"gid://gitlab/CustomerRelations::Contact/1"`.
   */
  CustomerRelationsContactID: any;
  /**
   * A `CustomerRelationsOrganizationID` is a global ID. It is encoded as a string.
   *
   * An example `CustomerRelationsOrganizationID` is: `"gid://gitlab/CustomerRelations::Organization/1"`.
   */
  CustomerRelationsOrganizationID: any;
  /** Date represented in ISO 8601 */
  Date: any;
  /**
   * A `DependencyProxyManifestID` is a global ID. It is encoded as a string.
   *
   * An example `DependencyProxyManifestID` is: `"gid://gitlab/DependencyProxy::Manifest/1"`.
   */
  DependencyProxyManifestID: any;
  /**
   * A `DesignManagementDesignAtVersionID` is a global ID. It is encoded as a string.
   *
   * An example `DesignManagementDesignAtVersionID` is: `"gid://gitlab/DesignManagement::DesignAtVersion/1"`.
   */
  DesignManagementDesignAtVersionID: any;
  /**
   * A `DesignManagementDesignID` is a global ID. It is encoded as a string.
   *
   * An example `DesignManagementDesignID` is: `"gid://gitlab/DesignManagement::Design/1"`.
   */
  DesignManagementDesignID: any;
  /**
   * A `DesignManagementVersionID` is a global ID. It is encoded as a string.
   *
   * An example `DesignManagementVersionID` is: `"gid://gitlab/DesignManagement::Version/1"`.
   */
  DesignManagementVersionID: any;
  /**
   * A `DiffNoteID` is a global ID. It is encoded as a string.
   *
   * An example `DiffNoteID` is: `"gid://gitlab/DiffNote/1"`.
   */
  DiffNoteID: any;
  /**
   * A `DiscussionID` is a global ID. It is encoded as a string.
   *
   * An example `DiscussionID` is: `"gid://gitlab/Discussion/1"`.
   */
  DiscussionID: any;
  /**
   * Duration between two instants, represented as a fractional number of seconds.
   *
   * For example: 12.3334
   */
  Duration: any;
  /**
   * A `EnvironmentID` is a global ID. It is encoded as a string.
   *
   * An example `EnvironmentID` is: `"gid://gitlab/Environment/1"`.
   */
  EnvironmentID: any;
  /**
   * A `GitlabErrorTrackingDetailedErrorID` is a global ID. It is encoded as a string.
   *
   * An example `GitlabErrorTrackingDetailedErrorID` is: `"gid://gitlab/Gitlab::ErrorTracking::DetailedError/1"`.
   */
  GitlabErrorTrackingDetailedErrorID: any;
  /**
   * A global identifier.
   *
   * A global identifier represents an object uniquely across the application.
   * An example of such an identifier is `"gid://gitlab/User/1"`.
   *
   * Global identifiers are encoded as strings.
   */
  GlobalID: any;
  /**
   * A `GroupID` is a global ID. It is encoded as a string.
   *
   * An example `GroupID` is: `"gid://gitlab/Group/1"`.
   */
  GroupID: any;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
  /**
   * A `IncidentManagementTimelineEventID` is a global ID. It is encoded as a string.
   *
   * An example `IncidentManagementTimelineEventID` is: `"gid://gitlab/IncidentManagement::TimelineEvent/1"`.
   */
  IncidentManagementTimelineEventID: any;
  /**
   * A `IntegrationsPrometheusID` is a global ID. It is encoded as a string.
   *
   * An example `IntegrationsPrometheusID` is: `"gid://gitlab/Integrations::Prometheus/1"`.
   * The older format `"gid://gitlab/PrometheusService/1"` was deprecated in 14.1.
   */
  IntegrationsPrometheusID: any;
  /**
   * A `IssuableID` is a global ID. It is encoded as a string.
   *
   * An example `IssuableID` is: `"gid://gitlab/Issuable/1"`.
   */
  IssuableID: any;
  /**
   * A `IssueID` is a global ID. It is encoded as a string.
   *
   * An example `IssueID` is: `"gid://gitlab/Issue/1"`.
   */
  IssueID: any;
  /** Represents untyped JSON */
  JSON: any;
  /**
   * A `CommitStatusID` is a global ID. It is encoded as a string.
   *
   * An example `CommitStatusID` is: `"gid://gitlab/CommitStatus/1"`.
   */
  JobID: any;
  /**
   * A `LabelID` is a global ID. It is encoded as a string.
   *
   * An example `LabelID` is: `"gid://gitlab/Label/1"`.
   */
  LabelID: any;
  /**
   * A `ListID` is a global ID. It is encoded as a string.
   *
   * An example `ListID` is: `"gid://gitlab/List/1"`.
   */
  ListID: any;
  /**
   * A `MergeRequestID` is a global ID. It is encoded as a string.
   *
   * An example `MergeRequestID` is: `"gid://gitlab/MergeRequest/1"`.
   */
  MergeRequestID: any;
  /**
   * A `MetricsDashboardAnnotationID` is a global ID. It is encoded as a string.
   *
   * An example `MetricsDashboardAnnotationID` is: `"gid://gitlab/Metrics::Dashboard::Annotation/1"`.
   */
  MetricsDashboardAnnotationID: any;
  /**
   * A `MilestoneID` is a global ID. It is encoded as a string.
   *
   * An example `MilestoneID` is: `"gid://gitlab/Milestone/1"`.
   */
  MilestoneID: any;
  /**
   * A `NoteID` is a global ID. It is encoded as a string.
   *
   * An example `NoteID` is: `"gid://gitlab/Note/1"`.
   */
  NoteID: any;
  /**
   * A `NoteableID` is a global ID. It is encoded as a string.
   *
   * An example `NoteableID` is: `"gid://gitlab/Noteable/1"`.
   */
  NoteableID: any;
  /**
   * A `PackagesConanFileMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesConanFileMetadatumID` is: `"gid://gitlab/Packages::Conan::FileMetadatum/1"`.
   */
  PackagesConanFileMetadatumID: any;
  /**
   * A `PackagesConanMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesConanMetadatumID` is: `"gid://gitlab/Packages::Conan::Metadatum/1"`.
   */
  PackagesConanMetadatumID: any;
  /**
   * A `PackagesDependencyID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesDependencyID` is: `"gid://gitlab/Packages::Dependency/1"`.
   */
  PackagesDependencyID: any;
  /**
   * A `PackagesDependencyLinkID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesDependencyLinkID` is: `"gid://gitlab/Packages::DependencyLink/1"`.
   */
  PackagesDependencyLinkID: any;
  /**
   * A `PackagesMavenMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesMavenMetadatumID` is: `"gid://gitlab/Packages::Maven::Metadatum/1"`.
   */
  PackagesMavenMetadatumID: any;
  /**
   * A `PackagesNugetDependencyLinkMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesNugetDependencyLinkMetadatumID` is: `"gid://gitlab/Packages::Nuget::DependencyLinkMetadatum/1"`.
   */
  PackagesNugetDependencyLinkMetadatumID: any;
  /**
   * A `PackagesNugetMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesNugetMetadatumID` is: `"gid://gitlab/Packages::Nuget::Metadatum/1"`.
   */
  PackagesNugetMetadatumID: any;
  /**
   * A `PackagesPackageFileID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesPackageFileID` is: `"gid://gitlab/Packages::PackageFile/1"`.
   */
  PackagesPackageFileID: any;
  /**
   * A `PackagesPackageID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesPackageID` is: `"gid://gitlab/Packages::Package/1"`.
   */
  PackagesPackageID: any;
  /**
   * A `PackagesPypiMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesPypiMetadatumID` is: `"gid://gitlab/Packages::Pypi::Metadatum/1"`.
   */
  PackagesPypiMetadatumID: any;
  /**
   * A `ProjectID` is a global ID. It is encoded as a string.
   *
   * An example `ProjectID` is: `"gid://gitlab/Project/1"`.
   */
  ProjectID: any;
  /**
   * A `ReleaseID` is a global ID. It is encoded as a string.
   *
   * An example `ReleaseID` is: `"gid://gitlab/Release/1"`.
   */
  ReleaseID: any;
  /**
   * A `ReleasesLinkID` is a global ID. It is encoded as a string.
   *
   * An example `ReleasesLinkID` is: `"gid://gitlab/Releases::Link/1"`.
   */
  ReleasesLinkID: any;
  /**
   * A `SnippetID` is a global ID. It is encoded as a string.
   *
   * An example `SnippetID` is: `"gid://gitlab/Snippet/1"`.
   */
  SnippetID: any;
  /**
   * A `TerraformStateID` is a global ID. It is encoded as a string.
   *
   * An example `TerraformStateID` is: `"gid://gitlab/Terraform::State/1"`.
   */
  TerraformStateID: any;
  /**
   * Time represented in ISO 8601.
   *
   * For example: "2021-03-09T14:58:50+00:00".
   *
   * See `https://www.iso.org/iso-8601-date-and-time-format.html`.
   */
  Time: any;
  /**
   * A `TimelogID` is a global ID. It is encoded as a string.
   *
   * An example `TimelogID` is: `"gid://gitlab/Timelog/1"`.
   */
  TimelogID: any;
  /**
   * A `TodoID` is a global ID. It is encoded as a string.
   *
   * An example `TodoID` is: `"gid://gitlab/Todo/1"`.
   */
  TodoID: any;
  /**
   * A `TodoableID` is a global ID. It is encoded as a string.
   *
   * An example `TodoableID` is: `"gid://gitlab/Todoable/1"`.
   */
  TodoableID: any;
  /** A regexp containing patterns sourced from user input */
  UntrustedRegexp: any;
  Upload: any;
  /**
   * A `UploadID` is a global ID. It is encoded as a string.
   *
   * An example `UploadID` is: `"gid://gitlab/Upload/1"`.
   */
  UploadID: any;
  /**
   * A `UserID` is a global ID. It is encoded as a string.
   *
   * An example `UserID` is: `"gid://gitlab/User/1"`.
   */
  UserID: any;
  /**
   * A `UsersSavedReplyID` is a global ID. It is encoded as a string.
   *
   * An example `UsersSavedReplyID` is: `"gid://gitlab/Users::SavedReply/1"`.
   */
  UsersSavedReplyID: any;
  /**
   * A `WorkItemID` is a global ID. It is encoded as a string.
   *
   * An example `WorkItemID` is: `"gid://gitlab/WorkItem/1"`.
   *
   * While we transition from Issues into Work Items this type will temporarily support
   * `IssueID` like: `"gid://gitlab/Issue/1"`. This behavior will be removed without notice in the future.
   */
  WorkItemID: any;
  /**
   * A `WorkItemsTypeID` is a global ID. It is encoded as a string.
   *
   * An example `WorkItemsTypeID` is: `"gid://gitlab/WorkItems::Type/1"`.
   */
  WorkItemsTypeID: any;
};

/** Represents the access level of a relationship between a User and object that it is related to */
export type AccessLevel = {
  __typename?: 'AccessLevel';
  /** Integer representation of access level. */
  integerValue?: Maybe<Scalars['Int']>;
  /** String representation of access level. */
  stringValue?: Maybe<AccessLevelEnum>;
};

/** Access level to a resource */
export type AccessLevelEnum =
  /** Developer access. */
  | 'DEVELOPER'
  /** Guest access. */
  | 'GUEST'
  /** Maintainer access. */
  | 'MAINTAINER'
  /** Minimal access. */
  | 'MINIMAL_ACCESS'
  /** No access. */
  | 'NO_ACCESS'
  /** Owner access. */
  | 'OWNER'
  /** Reporter access. */
  | 'REPORTER';

/** Autogenerated input type of AdminSidekiqQueuesDeleteJobs */
export type AdminSidekiqQueuesDeleteJobsInput = {
  /** Delete jobs matching artifact_size in the context metadata. */
  artifactSize?: InputMaybe<Scalars['String']>;
  /** Delete jobs matching artifacts_dependencies_count in the context metadata. */
  artifactsDependenciesCount?: InputMaybe<Scalars['String']>;
  /** Delete jobs matching artifacts_dependencies_size in the context metadata. */
  artifactsDependenciesSize?: InputMaybe<Scalars['String']>;
  /** Delete jobs matching caller_id in the context metadata. */
  callerId?: InputMaybe<Scalars['String']>;
  /** Delete jobs matching client_id in the context metadata. */
  clientId?: InputMaybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Delete jobs matching feature_category in the context metadata. */
  featureCategory?: InputMaybe<Scalars['String']>;
  /** Delete jobs matching job_id in the context metadata. */
  jobId?: InputMaybe<Scalars['String']>;
  /** Delete jobs matching pipeline_id in the context metadata. */
  pipelineId?: InputMaybe<Scalars['String']>;
  /** Delete jobs matching project in the context metadata. */
  project?: InputMaybe<Scalars['String']>;
  /** Name of the queue to delete jobs from. */
  queueName: Scalars['String'];
  /** Delete jobs matching related_class in the context metadata. */
  relatedClass?: InputMaybe<Scalars['String']>;
  /** Delete jobs matching remote_ip in the context metadata. */
  remoteIp?: InputMaybe<Scalars['String']>;
  /** Delete jobs matching root_caller_id in the context metadata. */
  rootCallerId?: InputMaybe<Scalars['String']>;
  /** Delete jobs matching root_namespace in the context metadata. */
  rootNamespace?: InputMaybe<Scalars['String']>;
  /** Delete jobs matching user in the context metadata. */
  user?: InputMaybe<Scalars['String']>;
  /** Delete jobs with the given worker class. */
  workerClass?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of AdminSidekiqQueuesDeleteJobs */
export type AdminSidekiqQueuesDeleteJobsPayload = {
  __typename?: 'AdminSidekiqQueuesDeleteJobsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Information about the status of the deletion request. */
  result?: Maybe<DeleteJobsResponse>;
};

/** Configuration details for an Agent */
export type AgentConfiguration = {
  __typename?: 'AgentConfiguration';
  /** Name of the agent. */
  agentName?: Maybe<Scalars['String']>;
};

/** The connection type for AgentConfiguration. */
export type AgentConfigurationConnection = {
  __typename?: 'AgentConfigurationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AgentConfigurationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AgentConfiguration>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AgentConfigurationEdge = {
  __typename?: 'AgentConfigurationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AgentConfiguration>;
};

/** Information about a connected Agent */
export type AgentMetadata = {
  __typename?: 'AgentMetadata';
  /** Agent version commit. */
  commit?: Maybe<Scalars['String']>;
  /** Name of the pod running the Agent. */
  podName?: Maybe<Scalars['String']>;
  /** Namespace of the pod running the Agent. */
  podNamespace?: Maybe<Scalars['String']>;
  /** Agent version tag. */
  version?: Maybe<Scalars['String']>;
};

/** Agent token statuses */
export type AgentTokenStatus =
  /** Active agent token. */
  | 'ACTIVE'
  /** Revoked agent token. */
  | 'REVOKED';

/** Describes an alert from the project's Alert Management */
export type AlertManagementAlert = NoteableInterface & Todoable & {
  __typename?: 'AlertManagementAlert';
  /** Assignees of the alert. */
  assignees?: Maybe<UserCoreConnection>;
  /** Timestamp the alert was created. */
  createdAt?: Maybe<Scalars['Time']>;
  /** Description of the alert. */
  description?: Maybe<Scalars['String']>;
  /** Alert details. */
  details?: Maybe<Scalars['JSON']>;
  /** URL of the alert detail page. */
  detailsUrl: Scalars['String'];
  /** All discussions on this noteable. */
  discussions: DiscussionConnection;
  /** Timestamp the alert ended. */
  endedAt?: Maybe<Scalars['Time']>;
  /** Environment for the alert. */
  environment?: Maybe<Environment>;
  /** Number of events of this alert. */
  eventCount?: Maybe<Scalars['Int']>;
  /** List of hosts the alert came from. */
  hosts?: Maybe<Array<Scalars['String']>>;
  /** Internal ID of the alert. */
  iid: Scalars['ID'];
  /** Issue attached to the alert. */
  issue?: Maybe<Issue>;
  /**
   * Internal ID of the GitLab issue attached to the alert. Deprecated in 13.10: Use issue field.
   * @deprecated Use issue field. Deprecated in 13.10.
   */
  issueIid?: Maybe<Scalars['ID']>;
  /** URL for metrics embed for the alert. */
  metricsDashboardUrl?: Maybe<Scalars['String']>;
  /** Monitoring tool the alert came from. */
  monitoringTool?: Maybe<Scalars['String']>;
  /** All notes on this noteable. */
  notes: NoteConnection;
  /** Alert condition for Prometheus. */
  prometheusAlert?: Maybe<PrometheusAlert>;
  /** Runbook for the alert as defined in alert details. */
  runbook?: Maybe<Scalars['String']>;
  /** Service the alert came from. */
  service?: Maybe<Scalars['String']>;
  /** Severity of the alert. */
  severity?: Maybe<AlertManagementSeverity>;
  /** Timestamp the alert was raised. */
  startedAt?: Maybe<Scalars['Time']>;
  /** Status of the alert. */
  status?: Maybe<AlertManagementStatus>;
  /** Title of the alert. */
  title?: Maybe<Scalars['String']>;
  /** To-do items of the current user for the alert. */
  todos?: Maybe<TodoConnection>;
  /** Timestamp the alert was last updated. */
  updatedAt?: Maybe<Scalars['Time']>;
  /** URL of the alert. */
  webUrl: Scalars['String'];
};


/** Describes an alert from the project's Alert Management */
export type AlertManagementAlertAssigneesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Describes an alert from the project's Alert Management */
export type AlertManagementAlertDiscussionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Describes an alert from the project's Alert Management */
export type AlertManagementAlertNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Describes an alert from the project's Alert Management */
export type AlertManagementAlertTodosArgs = {
  action?: InputMaybe<Array<TodoActionEnum>>;
  after?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Array<Scalars['ID']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Array<Scalars['ID']>>;
  state?: InputMaybe<Array<TodoStateEnum>>;
  type?: InputMaybe<Array<TodoTargetEnum>>;
};

/** The connection type for AlertManagementAlert. */
export type AlertManagementAlertConnection = {
  __typename?: 'AlertManagementAlertConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AlertManagementAlertEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AlertManagementAlert>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AlertManagementAlertEdge = {
  __typename?: 'AlertManagementAlertEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AlertManagementAlert>;
};

/** Values for sorting alerts */
export type AlertManagementAlertSort =
  /** Created at ascending order. */
  | 'CREATED_ASC'
  /** Created at descending order. */
  | 'CREATED_DESC'
  /** Created time by ascending order. */
  | 'CREATED_TIME_ASC'
  /** Created time by descending order. */
  | 'CREATED_TIME_DESC'
  /** End time by ascending order. */
  | 'ENDED_AT_ASC'
  /** End time by descending order. */
  | 'ENDED_AT_DESC'
  /** Events count by ascending order. */
  | 'EVENT_COUNT_ASC'
  /** Events count by descending order. */
  | 'EVENT_COUNT_DESC'
  /** Severity from less critical to more critical. */
  | 'SEVERITY_ASC'
  /** Severity from more critical to less critical. */
  | 'SEVERITY_DESC'
  /** Start time by ascending order. */
  | 'STARTED_AT_ASC'
  /** Start time by descending order. */
  | 'STARTED_AT_DESC'
  /** Status by order: `Ignored > Resolved > Acknowledged > Triggered`. */
  | 'STATUS_ASC'
  /** Status by order: `Triggered > Acknowledged > Resolved > Ignored`. */
  | 'STATUS_DESC'
  /** Updated at ascending order. */
  | 'UPDATED_ASC'
  /** Updated at descending order. */
  | 'UPDATED_DESC'
  /** Created time by ascending order. */
  | 'UPDATED_TIME_ASC'
  /** Created time by descending order. */
  | 'UPDATED_TIME_DESC'
  /** Created at ascending order. */
  | 'created_asc'
  /** Created at descending order. */
  | 'created_desc'
  /** Updated at ascending order. */
  | 'updated_asc'
  /** Updated at descending order. */
  | 'updated_desc';

/** Represents total number of alerts for the represented categories */
export type AlertManagementAlertStatusCountsType = {
  __typename?: 'AlertManagementAlertStatusCountsType';
  /** Number of alerts with status ACKNOWLEDGED for the project */
  acknowledged?: Maybe<Scalars['Int']>;
  /** Total number of alerts for the project. */
  all?: Maybe<Scalars['Int']>;
  /** Number of alerts with status IGNORED for the project */
  ignored?: Maybe<Scalars['Int']>;
  /** Number of alerts with status TRIGGERED or ACKNOWLEDGED for the project. */
  open?: Maybe<Scalars['Int']>;
  /** Number of alerts with status RESOLVED for the project */
  resolved?: Maybe<Scalars['Int']>;
  /** Number of alerts with status TRIGGERED for the project */
  triggered?: Maybe<Scalars['Int']>;
};

/** Filters the alerts based on given domain */
export type AlertManagementDomainFilter =
  /** Alerts for operations domain. */
  | 'operations'
  /**
   * Alerts for threat monitoring domain. Deprecated in 15.0: Network policies are
   * deprecated and will be removed in GitLab 16.0.
   */
  | 'threat_monitoring';

/** An endpoint and credentials used to accept alerts for a project */
export type AlertManagementHttpIntegration = AlertManagementIntegration & {
  __typename?: 'AlertManagementHttpIntegration';
  /** Whether the endpoint is currently accepting alerts. */
  active?: Maybe<Scalars['Boolean']>;
  /** URL at which Prometheus metrics can be queried to populate the metrics dashboard. */
  apiUrl?: Maybe<Scalars['String']>;
  /** ID of the integration. */
  id: Scalars['ID'];
  /** Name of the integration. */
  name?: Maybe<Scalars['String']>;
  /** Token used to authenticate alert notification requests. */
  token?: Maybe<Scalars['String']>;
  /** Type of integration. */
  type: AlertManagementIntegrationType;
  /** Endpoint which accepts alert notifications. */
  url?: Maybe<Scalars['String']>;
};

/** The connection type for AlertManagementHttpIntegration. */
export type AlertManagementHttpIntegrationConnection = {
  __typename?: 'AlertManagementHttpIntegrationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AlertManagementHttpIntegrationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AlertManagementHttpIntegration>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AlertManagementHttpIntegrationEdge = {
  __typename?: 'AlertManagementHttpIntegrationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AlertManagementHttpIntegration>;
};

export type AlertManagementIntegration = {
  /** Whether the endpoint is currently accepting alerts. */
  active?: Maybe<Scalars['Boolean']>;
  /** URL at which Prometheus metrics can be queried to populate the metrics dashboard. */
  apiUrl?: Maybe<Scalars['String']>;
  /** ID of the integration. */
  id: Scalars['ID'];
  /** Name of the integration. */
  name?: Maybe<Scalars['String']>;
  /** Token used to authenticate alert notification requests. */
  token?: Maybe<Scalars['String']>;
  /** Type of integration. */
  type: AlertManagementIntegrationType;
  /** Endpoint which accepts alert notifications. */
  url?: Maybe<Scalars['String']>;
};

/** The connection type for AlertManagementIntegration. */
export type AlertManagementIntegrationConnection = {
  __typename?: 'AlertManagementIntegrationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AlertManagementIntegrationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AlertManagementIntegration>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AlertManagementIntegrationEdge = {
  __typename?: 'AlertManagementIntegrationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<AlertManagementIntegration>;
};

/** Values of types of integrations */
export type AlertManagementIntegrationType =
  /** Integration with any monitoring tool. */
  | 'HTTP'
  /** Prometheus integration. */
  | 'PROMETHEUS';

/** An endpoint and credentials used to accept Prometheus alerts for a project */
export type AlertManagementPrometheusIntegration = AlertManagementIntegration & {
  __typename?: 'AlertManagementPrometheusIntegration';
  /** Whether the endpoint is currently accepting alerts. */
  active?: Maybe<Scalars['Boolean']>;
  /** URL at which Prometheus metrics can be queried to populate the metrics dashboard. */
  apiUrl?: Maybe<Scalars['String']>;
  /** ID of the integration. */
  id: Scalars['ID'];
  /** Name of the integration. */
  name?: Maybe<Scalars['String']>;
  /** Token used to authenticate alert notification requests. */
  token?: Maybe<Scalars['String']>;
  /** Type of integration. */
  type: AlertManagementIntegrationType;
  /** Endpoint which accepts alert notifications. */
  url?: Maybe<Scalars['String']>;
};

/** Alert severity values */
export type AlertManagementSeverity =
  /** Critical severity */
  | 'CRITICAL'
  /** High severity */
  | 'HIGH'
  /** Info severity */
  | 'INFO'
  /** Low severity */
  | 'LOW'
  /** Medium severity */
  | 'MEDIUM'
  /** Unknown severity */
  | 'UNKNOWN';

/** Alert status values */
export type AlertManagementStatus =
  /** Someone is actively investigating the problem. */
  | 'ACKNOWLEDGED'
  /** No action will be taken. */
  | 'IGNORED'
  /** The problem has been addressed. */
  | 'RESOLVED'
  /** Investigation has not started. */
  | 'TRIGGERED';

/** Autogenerated input type of AlertSetAssignees */
export type AlertSetAssigneesInput = {
  /** Usernames to assign to the alert. Replaces existing assignees by default. */
  assigneeUsernames: Array<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the alert to mutate. */
  iid: Scalars['String'];
  /** Operation to perform. Defaults to REPLACE. */
  operationMode?: InputMaybe<MutationOperationMode>;
  /** Project the alert to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of AlertSetAssignees */
export type AlertSetAssigneesPayload = {
  __typename?: 'AlertSetAssigneesPayload';
  /** Alert after mutation. */
  alert?: Maybe<AlertManagementAlert>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue created after mutation. */
  issue?: Maybe<Issue>;
  /** To-do item after mutation. */
  todo?: Maybe<Todo>;
};

/** Autogenerated input type of AlertTodoCreate */
export type AlertTodoCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the alert to mutate. */
  iid: Scalars['String'];
  /** Project the alert to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of AlertTodoCreate */
export type AlertTodoCreatePayload = {
  __typename?: 'AlertTodoCreatePayload';
  /** Alert after mutation. */
  alert?: Maybe<AlertManagementAlert>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue created after mutation. */
  issue?: Maybe<Issue>;
  /** To-do item after mutation. */
  todo?: Maybe<Todo>;
};

/** Assignee ID wildcard values */
export type AssigneeWildcardId =
  /** An assignee is assigned. */
  | 'ANY'
  /** No assignee is assigned. */
  | 'NONE';

/** User availability status */
export type AvailabilityEnum =
  /** Busy */
  | 'BUSY'
  /** Not Set */
  | 'NOT_SET';

/** An emoji awarded by a user */
export type AwardEmoji = {
  __typename?: 'AwardEmoji';
  /** Emoji description. */
  description: Scalars['String'];
  /** Emoji as an icon. */
  emoji: Scalars['String'];
  /** Emoji name. */
  name: Scalars['String'];
  /** Emoji in Unicode. */
  unicode: Scalars['String'];
  /** Unicode version for this emoji. */
  unicodeVersion: Scalars['String'];
  /** User who awarded the emoji. */
  user: UserCore;
};

/** Autogenerated input type of AwardEmojiAdd */
export type AwardEmojiAddInput = {
  /** Global ID of the awardable resource. */
  awardableId: Scalars['AwardableID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Emoji name. */
  name: Scalars['String'];
};

/** Autogenerated return type of AwardEmojiAdd */
export type AwardEmojiAddPayload = {
  __typename?: 'AwardEmojiAddPayload';
  /** Award emoji after mutation. */
  awardEmoji?: Maybe<AwardEmoji>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of AwardEmojiRemove */
export type AwardEmojiRemoveInput = {
  /** Global ID of the awardable resource. */
  awardableId: Scalars['AwardableID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Emoji name. */
  name: Scalars['String'];
};

/** Autogenerated return type of AwardEmojiRemove */
export type AwardEmojiRemovePayload = {
  __typename?: 'AwardEmojiRemovePayload';
  /** Award emoji after mutation. */
  awardEmoji?: Maybe<AwardEmoji>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of AwardEmojiToggle */
export type AwardEmojiToggleInput = {
  /** Global ID of the awardable resource. */
  awardableId: Scalars['AwardableID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Emoji name. */
  name: Scalars['String'];
};

/** Autogenerated return type of AwardEmojiToggle */
export type AwardEmojiTogglePayload = {
  __typename?: 'AwardEmojiTogglePayload';
  /** Award emoji after mutation. */
  awardEmoji?: Maybe<AwardEmoji>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Indicates the status of the emoji. True if the toggle awarded the emoji, and false if the toggle removed the emoji. */
  toggledOn: Scalars['Boolean'];
};

export type BaseService = Service & {
  __typename?: 'BaseService';
  /** Indicates if the service is active. */
  active?: Maybe<Scalars['Boolean']>;
  /** Type of the service. */
  serviceType?: Maybe<ServiceType>;
  /** Class name of the service. */
  type?: Maybe<Scalars['String']>;
};

export type Blob = Entry & {
  __typename?: 'Blob';
  /** Flat path of the entry. */
  flatPath: Scalars['String'];
  /** ID of the entry. */
  id: Scalars['ID'];
  /** LFS ID of the blob. */
  lfsOid?: Maybe<Scalars['String']>;
  /** Blob mode in numeric format. */
  mode?: Maybe<Scalars['String']>;
  /** Name of the entry. */
  name: Scalars['String'];
  /** Path of the entry. */
  path: Scalars['String'];
  /** Last commit SHA for the entry. */
  sha: Scalars['String'];
  /** Type of tree entry. */
  type: EntryType;
  /** Web path of the blob. */
  webPath?: Maybe<Scalars['String']>;
  /** Web URL of the blob. */
  webUrl?: Maybe<Scalars['String']>;
};

/** The connection type for Blob. */
export type BlobConnection = {
  __typename?: 'BlobConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BlobEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Blob>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BlobEdge = {
  __typename?: 'BlobEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Blob>;
};

/** Represents how the blob content should be displayed */
export type BlobViewer = {
  __typename?: 'BlobViewer';
  /** Shows whether the blob should be displayed collapsed. */
  collapsed: Scalars['Boolean'];
  /** Content file type. */
  fileType: Scalars['String'];
  /** Shows whether the blob content is loaded asynchronously. */
  loadAsync: Scalars['Boolean'];
  /** Loading partial name. */
  loadingPartialName: Scalars['String'];
  /** Error rendering the blob content. */
  renderError?: Maybe<Scalars['String']>;
  /** Shows whether the blob is too large to be displayed. */
  tooLarge: Scalars['Boolean'];
  /** Type of blob viewer. */
  type: BlobViewersType;
};

/** Types of blob viewers */
export type BlobViewersType =
  /** Auxiliary blob viewers type. */
  | 'auxiliary'
  /** Rich blob viewers type. */
  | 'rich'
  /** Simple blob viewers type. */
  | 'simple';

/** Represents a project or group issue board */
export type Board = {
  __typename?: 'Board';
  /** Timestamp of when the board was created. */
  createdAt: Scalars['Time'];
  /** Whether or not backlog list is hidden. */
  hideBacklogList?: Maybe<Scalars['Boolean']>;
  /** Whether or not closed list is hidden. */
  hideClosedList?: Maybe<Scalars['Boolean']>;
  /** ID (global ID) of the board. */
  id: Scalars['ID'];
  /** Lists of the board. */
  lists?: Maybe<BoardListConnection>;
  /** Name of the board. */
  name?: Maybe<Scalars['String']>;
  /** Timestamp of when the board was last updated. */
  updatedAt: Scalars['Time'];
  /** Web path of the board. */
  webPath: Scalars['String'];
  /** Web URL of the board. */
  webUrl: Scalars['String'];
};


/** Represents a project or group issue board */
export type BoardListsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ListID']>;
  issueFilters?: InputMaybe<BoardIssueInput>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Board. */
export type BoardConnection = {
  __typename?: 'BoardConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BoardEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Board>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BoardEdge = {
  __typename?: 'BoardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Board>;
};

export type BoardIssueInput = {
  /** Filter by assignee username. */
  assigneeUsername?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter by assignee wildcard. Incompatible with assigneeUsername. */
  assigneeWildcardId?: InputMaybe<AssigneeWildcardId>;
  /** Filter by author username. */
  authorUsername?: InputMaybe<Scalars['String']>;
  /** Filter by confidentiality. */
  confidential?: InputMaybe<Scalars['Boolean']>;
  /** List of IIDs of issues. For example `["1", "2"]`. */
  iids?: InputMaybe<Array<Scalars['String']>>;
  /** Filter by label name. */
  labelName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter by milestone title. */
  milestoneTitle?: InputMaybe<Scalars['String']>;
  /** Filter by milestone ID wildcard. */
  milestoneWildcardId?: InputMaybe<MilestoneWildcardId>;
  /** Filter by reaction emoji applied by the current user. Wildcard values "NONE" and "ANY" are supported. */
  myReactionEmoji?: InputMaybe<Scalars['String']>;
  /** List of negated arguments. */
  not?: InputMaybe<NegatedBoardIssueInput>;
  /** Filter by release tag. */
  releaseTag?: InputMaybe<Scalars['String']>;
  /** Search query for issue title or description. */
  search?: InputMaybe<Scalars['String']>;
  /** Filter by the given issue types. */
  types?: InputMaybe<Array<IssueType>>;
};

/** Represents a list for an issue board */
export type BoardList = {
  __typename?: 'BoardList';
  /** Indicates if the list is collapsed for this user. */
  collapsed?: Maybe<Scalars['Boolean']>;
  /** ID (global ID) of the list. */
  id: Scalars['ID'];
  /** Board issues. */
  issues?: Maybe<IssueConnection>;
  /** Count of issues in the list. */
  issuesCount?: Maybe<Scalars['Int']>;
  /** Label of the list. */
  label?: Maybe<Label>;
  /** Type of the list. */
  listType: Scalars['String'];
  /** Position of list within the board. */
  position?: Maybe<Scalars['Int']>;
  /** Title of the list. */
  title: Scalars['String'];
};


/** Represents a list for an issue board */
export type BoardListIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<BoardIssueInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for BoardList. */
export type BoardListConnection = {
  __typename?: 'BoardListConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BoardListEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<BoardList>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of BoardListCreate */
export type BoardListCreateInput = {
  /** Create the backlog list. */
  backlog?: InputMaybe<Scalars['Boolean']>;
  /** Global ID of the issue board to mutate. */
  boardId: Scalars['BoardID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of an existing label. */
  labelId?: InputMaybe<Scalars['LabelID']>;
};

/** Autogenerated return type of BoardListCreate */
export type BoardListCreatePayload = {
  __typename?: 'BoardListCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue list in the issue board. */
  list?: Maybe<BoardList>;
};

/** An edge in a connection. */
export type BoardListEdge = {
  __typename?: 'BoardListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<BoardList>;
};

export type Branch = {
  __typename?: 'Branch';
  /** Commit for the branch. */
  commit?: Maybe<Commit>;
  /** Name of the branch. */
  name: Scalars['String'];
};

/** Autogenerated input type of BulkRunnerDelete */
export type BulkRunnerDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IDs of the runners to delete. */
  ids?: InputMaybe<Array<Scalars['CiRunnerID']>>;
};

/** Autogenerated return type of BulkRunnerDelete */
export type BulkRunnerDeletePayload = {
  __typename?: 'BulkRunnerDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Number of records effectively deleted. Only present if operation was performed synchronously. */
  deletedCount?: Maybe<Scalars['Int']>;
  /** IDs of records effectively deleted. Only present if operation was performed synchronously. */
  deletedIds?: Maybe<Array<Scalars['CiRunnerID']>>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

export type CiApplicationSettings = {
  __typename?: 'CiApplicationSettings';
  /** Whether to keep the latest jobs artifacts. */
  keepLatestArtifact?: Maybe<Scalars['Boolean']>;
};

export type CiBuildNeed = {
  __typename?: 'CiBuildNeed';
  /** ID of the BuildNeed. */
  id: Scalars['ID'];
  /** Name of the job we need to complete. */
  name?: Maybe<Scalars['String']>;
};

/** The connection type for CiBuildNeed. */
export type CiBuildNeedConnection = {
  __typename?: 'CiBuildNeedConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiBuildNeedEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiBuildNeed>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiBuildNeedEdge = {
  __typename?: 'CiBuildNeedEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiBuildNeed>;
};

/** Autogenerated input type of CiCdSettingsUpdate */
export type CiCdSettingsUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Full Path of the project the settings belong to. */
  fullPath: Scalars['ID'];
  /** Indicates CI job tokens generated in this project have restricted access to resources. */
  jobTokenScopeEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Indicates if the latest artifact should be kept for this project. */
  keepLatestArtifact?: InputMaybe<Scalars['Boolean']>;
};

/** Autogenerated return type of CiCdSettingsUpdate */
export type CiCdSettingsUpdatePayload = {
  __typename?: 'CiCdSettingsUpdatePayload';
  /** CI/CD settings after mutation. */
  ciCdSettings: ProjectCiCdSetting;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

export type CiConfig = {
  __typename?: 'CiConfig';
  /** Linting errors. */
  errors?: Maybe<Array<Scalars['String']>>;
  /** List of included files. */
  includes?: Maybe<Array<CiConfigInclude>>;
  /** Merged CI configuration YAML. */
  mergedYaml?: Maybe<Scalars['String']>;
  /** Stages of the pipeline. */
  stages?: Maybe<CiConfigStageConnection>;
  /** Status of linting, can be either valid or invalid. */
  status?: Maybe<CiConfigStatus>;
  /** Linting warnings. */
  warnings?: Maybe<Array<Scalars['String']>>;
};


export type CiConfigStagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CiConfigGroup = {
  __typename?: 'CiConfigGroup';
  /** Jobs in group. */
  jobs?: Maybe<CiConfigJobConnection>;
  /** Name of the job group. */
  name?: Maybe<Scalars['String']>;
  /** Size of the job group. */
  size?: Maybe<Scalars['Int']>;
};


export type CiConfigGroupJobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for CiConfigGroup. */
export type CiConfigGroupConnection = {
  __typename?: 'CiConfigGroupConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiConfigGroupEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiConfigGroup>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiConfigGroupEdge = {
  __typename?: 'CiConfigGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiConfigGroup>;
};

export type CiConfigInclude = {
  __typename?: 'CiConfigInclude';
  /** File blob location. It can be masked if it contains masked variables, e.g., "https://gitlab.com/gitlab-org/gitlab/-/blob/e52d6d0246d7375291850e61f0abc101fbda9dc2/.gitlab/ci/build-images.gitlab-ci.yml". */
  blob?: Maybe<Scalars['String']>;
  /** Current project scope, e.g., "gitlab-org/gitlab". */
  contextProject?: Maybe<Scalars['String']>;
  /** Current sha scope. */
  contextSha?: Maybe<Scalars['String']>;
  /**
   * Extra information for the `include`, which can contain `job_name`, `project`,
   * and `ref`. Values can be masked if they contain masked variables.
   */
  extra?: Maybe<Scalars['JSON']>;
  /** File location. It can be masked if it contains masked variables, e.g., ".gitlab/ci/build-images.gitlab-ci.yml". */
  location?: Maybe<Scalars['String']>;
  /** File raw location. It can be masked if it contains masked variables, e.g., "https://gitlab.com/gitlab-org/gitlab/-/raw/e52d6d0246d7375291850e61f0abc101fbda9dc2/.gitlab/ci/build-images.gitlab-ci.yml". */
  raw?: Maybe<Scalars['String']>;
  /** Include type. */
  type?: Maybe<CiConfigIncludeType>;
};

/** Include type. */
export type CiConfigIncludeType =
  /** Project file include. */
  | 'file'
  /** Local include. */
  | 'local'
  /** Remote include. */
  | 'remote'
  /** Template include. */
  | 'template';

export type CiConfigJob = {
  __typename?: 'CiConfigJob';
  /** Override a set of commands that are executed after the job. */
  afterScript?: Maybe<Array<Scalars['String']>>;
  /** Allow job to fail. */
  allowFailure?: Maybe<Scalars['Boolean']>;
  /** Override a set of commands that are executed before the job. */
  beforeScript?: Maybe<Array<Scalars['String']>>;
  /** Name of an environment to which the job deploys. */
  environment?: Maybe<Scalars['String']>;
  /** Limit when jobs are not created. */
  except?: Maybe<CiConfigJobRestriction>;
  /** Name of the job group. */
  groupName?: Maybe<Scalars['String']>;
  /** Name of the job. */
  name?: Maybe<Scalars['String']>;
  /** Builds that must complete before the jobs run. */
  needs?: Maybe<CiConfigNeedConnection>;
  /** Jobs are created when these conditions do not apply. */
  only?: Maybe<CiConfigJobRestriction>;
  /** Shell script that is executed by a runner. */
  script?: Maybe<Array<Scalars['String']>>;
  /** Name of the job stage. */
  stage?: Maybe<Scalars['String']>;
  /** List of tags that are used to select a runner. */
  tags?: Maybe<Array<Scalars['String']>>;
  /** When to run the job. */
  when?: Maybe<Scalars['String']>;
};


export type CiConfigJobNeedsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for CiConfigJob. */
export type CiConfigJobConnection = {
  __typename?: 'CiConfigJobConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiConfigJobEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiConfigJob>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiConfigJobEdge = {
  __typename?: 'CiConfigJobEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiConfigJob>;
};

export type CiConfigJobRestriction = {
  __typename?: 'CiConfigJobRestriction';
  /** Git refs the job restriction applies to. */
  refs?: Maybe<Array<Scalars['String']>>;
};

export type CiConfigNeed = {
  __typename?: 'CiConfigNeed';
  /** Name of the need. */
  name?: Maybe<Scalars['String']>;
};

/** The connection type for CiConfigNeed. */
export type CiConfigNeedConnection = {
  __typename?: 'CiConfigNeedConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiConfigNeedEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiConfigNeed>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiConfigNeedEdge = {
  __typename?: 'CiConfigNeedEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiConfigNeed>;
};

export type CiConfigStage = {
  __typename?: 'CiConfigStage';
  /** Groups of jobs for the stage. */
  groups?: Maybe<CiConfigGroupConnection>;
  /** Name of the stage. */
  name?: Maybe<Scalars['String']>;
};


export type CiConfigStageGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for CiConfigStage. */
export type CiConfigStageConnection = {
  __typename?: 'CiConfigStageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiConfigStageEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiConfigStage>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiConfigStageEdge = {
  __typename?: 'CiConfigStageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiConfigStage>;
};

/** Values for YAML processor result */
export type CiConfigStatus =
  /** Configuration file is not valid. */
  | 'INVALID'
  /** Configuration file is valid. */
  | 'VALID';

export type CiGroup = {
  __typename?: 'CiGroup';
  /** Detailed status of the group. */
  detailedStatus?: Maybe<DetailedStatus>;
  /** ID for a group. */
  id: Scalars['String'];
  /** Jobs in group. */
  jobs?: Maybe<CiJobConnection>;
  /** Name of the job group. */
  name?: Maybe<Scalars['String']>;
  /** Size of the group. */
  size?: Maybe<Scalars['Int']>;
};


export type CiGroupJobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for CiGroup. */
export type CiGroupConnection = {
  __typename?: 'CiGroupConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiGroupEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiGroup>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiGroupEdge = {
  __typename?: 'CiGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiGroup>;
};

/** CI/CD variables for a group. */
export type CiGroupVariable = CiVariable & {
  __typename?: 'CiGroupVariable';
  /** Scope defining the environments that can use the variable. */
  environmentScope?: Maybe<Scalars['String']>;
  /** ID of the variable. */
  id: Scalars['ID'];
  /** Name of the variable. */
  key?: Maybe<Scalars['String']>;
  /** Indicates whether the variable is masked. */
  masked?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the variable is protected. */
  protected?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the variable is raw. */
  raw?: Maybe<Scalars['Boolean']>;
  /** Value of the variable. */
  value?: Maybe<Scalars['String']>;
  /** Type of the variable. */
  variableType?: Maybe<CiVariableType>;
};

/** The connection type for CiGroupVariable. */
export type CiGroupVariableConnection = {
  __typename?: 'CiGroupVariableConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiGroupVariableEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiGroupVariable>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiGroupVariableEdge = {
  __typename?: 'CiGroupVariableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiGroupVariable>;
};

/** CI/CD variables for a GitLab instance. */
export type CiInstanceVariable = CiVariable & {
  __typename?: 'CiInstanceVariable';
  /**
   * Scope defining the environments that can use the variable. Deprecated in 15.3:
   * No longer used, only available for GroupVariableType and ProjectVariableType.
   * @deprecated No longer used, only available for GroupVariableType and ProjectVariableType. Deprecated in 15.3.
   */
  environmentScope?: Maybe<Scalars['String']>;
  /** ID of the variable. */
  id: Scalars['ID'];
  /** Name of the variable. */
  key?: Maybe<Scalars['String']>;
  /** Indicates whether the variable is masked. */
  masked?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the variable is protected. */
  protected?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the variable is raw. */
  raw?: Maybe<Scalars['Boolean']>;
  /** Value of the variable. */
  value?: Maybe<Scalars['String']>;
  /** Type of the variable. */
  variableType?: Maybe<CiVariableType>;
};

/** The connection type for CiInstanceVariable. */
export type CiInstanceVariableConnection = {
  __typename?: 'CiInstanceVariableConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiInstanceVariableEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiInstanceVariable>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiInstanceVariableEdge = {
  __typename?: 'CiInstanceVariableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiInstanceVariable>;
};

export type CiJob = {
  __typename?: 'CiJob';
  /** Indicates the job is active. */
  active: Scalars['Boolean'];
  /** Whether the job is allowed to fail. */
  allowFailure: Scalars['Boolean'];
  /** Artifacts generated by the job. */
  artifacts?: Maybe<CiJobArtifactConnection>;
  /** Indicates the job can be canceled. */
  cancelable: Scalars['Boolean'];
  /** Path to the commit that triggered the job. */
  commitPath?: Maybe<Scalars['String']>;
  /** Coverage level of the job. */
  coverage?: Maybe<Scalars['Float']>;
  /** When the job was created. */
  createdAt: Scalars['Time'];
  /** Whether the job was created by a tag. */
  createdByTag: Scalars['Boolean'];
  /** Detailed status of the job. */
  detailedStatus?: Maybe<DetailedStatus>;
  /** Downstream pipeline for a bridge. */
  downstreamPipeline?: Maybe<Pipeline>;
  /** Duration of the job in seconds. */
  duration?: Maybe<Scalars['Int']>;
  /** When a job has finished running. */
  finishedAt?: Maybe<Scalars['Time']>;
  /** ID of the job. */
  id?: Maybe<Scalars['JobID']>;
  /** Indicates the type of job. */
  kind: CiJobKind;
  /** Whether the job has a manual action. */
  manualJob?: Maybe<Scalars['Boolean']>;
  /** Variables added to a manual job when the job is triggered. */
  manualVariables?: Maybe<CiManualVariableConnection>;
  /** Name of the job. */
  name?: Maybe<Scalars['String']>;
  /** References to builds that must complete before the jobs run. */
  needs?: Maybe<CiBuildNeedConnection>;
  /** Pipeline the job belongs to. */
  pipeline?: Maybe<Pipeline>;
  /** Indicates the job can be played. */
  playable: Scalars['Boolean'];
  /**
   * Jobs that must complete before the job runs. Returns `BuildNeed`, which is the
   * needed jobs if the job uses the `needs` keyword, or the previous stage jobs otherwise.
   */
  previousStageJobsOrNeeds?: Maybe<JobNeedUnionConnection>;
  /** When the job was enqueued and marked as pending. */
  queuedAt?: Maybe<Scalars['Time']>;
  /** How long the job was enqueued before starting. */
  queuedDuration?: Maybe<Scalars['Duration']>;
  /** Ref name of the job. */
  refName?: Maybe<Scalars['String']>;
  /** Path to the ref. */
  refPath?: Maybe<Scalars['String']>;
  /** Indicates that the job has been retried. */
  retried?: Maybe<Scalars['Boolean']>;
  /** Indicates the job can be retried. */
  retryable: Scalars['Boolean'];
  /** Schedule for the build. */
  scheduledAt?: Maybe<Scalars['Time']>;
  /** Type of job scheduling. Value is `dag` if the job uses the `needs` keyword, and `stage` otherwise. */
  schedulingType?: Maybe<Scalars['String']>;
  /** Short SHA1 ID of the commit. */
  shortSha: Scalars['String'];
  /** Stage of the job. */
  stage?: Maybe<CiStage>;
  /** When the job was started. */
  startedAt?: Maybe<Scalars['Time']>;
  /** Status of the job. */
  status?: Maybe<CiJobStatus>;
  /** Indicates the job is stuck. */
  stuck: Scalars['Boolean'];
  /** Tags for the current job. */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Whether the job was triggered. */
  triggered?: Maybe<Scalars['Boolean']>;
  /** Permissions for the current user on the resource */
  userPermissions: JobPermissions;
};


export type CiJobArtifactsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CiJobManualVariablesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CiJobNeedsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CiJobPreviousStageJobsOrNeedsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CiJobArtifact = {
  __typename?: 'CiJobArtifact';
  /** URL for downloading the artifact's file. */
  downloadPath?: Maybe<Scalars['String']>;
  /** File type of the artifact. */
  fileType?: Maybe<JobArtifactFileType>;
  /** File name of the artifact. */
  name?: Maybe<Scalars['String']>;
};

/** The connection type for CiJobArtifact. */
export type CiJobArtifactConnection = {
  __typename?: 'CiJobArtifactConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiJobArtifactEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiJobArtifact>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiJobArtifactEdge = {
  __typename?: 'CiJobArtifactEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiJobArtifact>;
};

/** The connection type for CiJob. */
export type CiJobConnection = {
  __typename?: 'CiJobConnection';
  /** Limited count of collection. Returns limit + 1 for counts greater than the limit. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiJobEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiJob>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};


/** The connection type for CiJob. */
export type CiJobConnectionCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type CiJobEdge = {
  __typename?: 'CiJobEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiJob>;
};

export type CiJobKind =
  /** Bridge CI job connecting a parent and child pipeline. */
  | 'BRIDGE'
  /** Standard CI job. */
  | 'BUILD';

export type CiJobStatus =
  /** A job that is canceled. */
  | 'CANCELED'
  /** A job that is created. */
  | 'CREATED'
  /** A job that is failed. */
  | 'FAILED'
  /** A job that is manual. */
  | 'MANUAL'
  /** A job that is pending. */
  | 'PENDING'
  /** A job that is preparing. */
  | 'PREPARING'
  /** A job that is running. */
  | 'RUNNING'
  /** A job that is scheduled. */
  | 'SCHEDULED'
  /** A job that is skipped. */
  | 'SKIPPED'
  /** A job that is success. */
  | 'SUCCESS'
  /** A job that is waiting for resource. */
  | 'WAITING_FOR_RESOURCE';

/** Autogenerated input type of CiJobTokenScopeAddProject */
export type CiJobTokenScopeAddProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Project that the CI job token scope belongs to. */
  projectPath: Scalars['ID'];
  /** Project to be added to the CI job token scope. */
  targetProjectPath: Scalars['ID'];
};

/** Autogenerated return type of CiJobTokenScopeAddProject */
export type CiJobTokenScopeAddProjectPayload = {
  __typename?: 'CiJobTokenScopeAddProjectPayload';
  /** CI job token's scope of access. */
  ciJobTokenScope?: Maybe<CiJobTokenScopeType>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of CiJobTokenScopeRemoveProject */
export type CiJobTokenScopeRemoveProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Project that the CI job token scope belongs to. */
  projectPath: Scalars['ID'];
  /** Project to be removed from the CI job token scope. */
  targetProjectPath: Scalars['ID'];
};

/** Autogenerated return type of CiJobTokenScopeRemoveProject */
export type CiJobTokenScopeRemoveProjectPayload = {
  __typename?: 'CiJobTokenScopeRemoveProjectPayload';
  /** CI job token's scope of access. */
  ciJobTokenScope?: Maybe<CiJobTokenScopeType>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

export type CiJobTokenScopeType = {
  __typename?: 'CiJobTokenScopeType';
  /** Allow list of projects that can be accessed by CI Job tokens created by this project. */
  projects: ProjectConnection;
};


export type CiJobTokenScopeTypeProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** CI/CD variables given to a manual job. */
export type CiManualVariable = CiVariable & {
  __typename?: 'CiManualVariable';
  /**
   * Scope defining the environments that can use the variable. Deprecated in 15.3:
   * No longer used, only available for GroupVariableType and ProjectVariableType.
   * @deprecated No longer used, only available for GroupVariableType and ProjectVariableType. Deprecated in 15.3.
   */
  environmentScope?: Maybe<Scalars['String']>;
  /** ID of the variable. */
  id: Scalars['ID'];
  /** Name of the variable. */
  key?: Maybe<Scalars['String']>;
  /** Indicates whether the variable is raw. */
  raw?: Maybe<Scalars['Boolean']>;
  /** Value of the variable. */
  value?: Maybe<Scalars['String']>;
  /** Type of the variable. */
  variableType?: Maybe<CiVariableType>;
};

/** The connection type for CiManualVariable. */
export type CiManualVariableConnection = {
  __typename?: 'CiManualVariableConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiManualVariableEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiManualVariable>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiManualVariableEdge = {
  __typename?: 'CiManualVariableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiManualVariable>;
};

/** CI/CD variables for a project. */
export type CiProjectVariable = CiVariable & {
  __typename?: 'CiProjectVariable';
  /** Scope defining the environments that can use the variable. */
  environmentScope?: Maybe<Scalars['String']>;
  /** ID of the variable. */
  id: Scalars['ID'];
  /** Name of the variable. */
  key?: Maybe<Scalars['String']>;
  /** Indicates whether the variable is masked. */
  masked?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the variable is protected. */
  protected?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the variable is raw. */
  raw?: Maybe<Scalars['Boolean']>;
  /** Value of the variable. */
  value?: Maybe<Scalars['String']>;
  /** Type of the variable. */
  variableType?: Maybe<CiVariableType>;
};

/** The connection type for CiProjectVariable. */
export type CiProjectVariableConnection = {
  __typename?: 'CiProjectVariableConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiProjectVariableEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiProjectVariable>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiProjectVariableEdge = {
  __typename?: 'CiProjectVariableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiProjectVariable>;
};

export type CiRunner = {
  __typename?: 'CiRunner';
  /** Access level of the runner. */
  accessLevel: CiRunnerAccessLevel;
  /**
   * Indicates the runner is allowed to receive jobs. Deprecated in 14.8: Use paused.
   * @deprecated Use paused. Deprecated in 14.8.
   */
  active: Scalars['Boolean'];
  /** Admin URL of the runner. Only available for administrators. */
  adminUrl?: Maybe<Scalars['String']>;
  /** Architecture provided by the the runner. */
  architectureName?: Maybe<Scalars['String']>;
  /** Timestamp of last contact from this runner. */
  contactedAt?: Maybe<Scalars['Time']>;
  /** Timestamp of creation of this runner. */
  createdAt?: Maybe<Scalars['Time']>;
  /** Description of the runner. */
  description?: Maybe<Scalars['String']>;
  /** Admin form URL of the runner. Only available for administrators. */
  editAdminUrl?: Maybe<Scalars['String']>;
  /** Executor last advertised by the runner. */
  executorName?: Maybe<Scalars['String']>;
  /** Groups the runner is associated with. For group runners only. */
  groups?: Maybe<GroupConnection>;
  /** ID of the runner. */
  id: Scalars['CiRunnerID'];
  /** IP address of the runner. */
  ipAddress?: Maybe<Scalars['String']>;
  /** Number of jobs processed by the runner (limited to 1000, plus one to indicate that more items exist). */
  jobCount?: Maybe<Scalars['Int']>;
  /** Jobs assigned to the runner. */
  jobs?: Maybe<CiJobConnection>;
  /** Indicates the runner is locked. */
  locked?: Maybe<Scalars['Boolean']>;
  /** Runner's maintenance notes. */
  maintenanceNote?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `maintenance_note` */
  maintenanceNoteHtml?: Maybe<Scalars['String']>;
  /** Maximum timeout (in seconds) for jobs processed by the runner. */
  maximumTimeout?: Maybe<Scalars['Int']>;
  /** Project that owns the runner. For project runners only. */
  ownerProject?: Maybe<Project>;
  /** Indicates the runner is paused and not available to run jobs. */
  paused: Scalars['Boolean'];
  /** Platform provided by the runner. */
  platformName?: Maybe<Scalars['String']>;
  /** Number of projects that the runner is associated with. */
  projectCount?: Maybe<Scalars['Int']>;
  /** Projects the runner is associated with. For project runners only. */
  projects?: Maybe<ProjectConnection>;
  /** Revision of the runner. */
  revision?: Maybe<Scalars['String']>;
  /** Indicates the runner is able to run untagged jobs. */
  runUntagged: Scalars['Boolean'];
  /** Type of the runner. */
  runnerType: CiRunnerType;
  /** First eight characters of the runner's token used to authenticate new job requests. Used as the runner's unique ID. */
  shortSha?: Maybe<Scalars['String']>;
  /** Status of the runner. */
  status: CiRunnerStatus;
  /** Tags associated with the runner. */
  tagList?: Maybe<Array<Scalars['String']>>;
  /** Runner token expiration time. */
  tokenExpiresAt?: Maybe<Scalars['Time']>;
  /** Permissions for the current user on the resource */
  userPermissions: RunnerPermissions;
  /** Version of the runner. */
  version?: Maybe<Scalars['String']>;
};


export type CiRunnerGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CiRunnerJobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  statuses?: InputMaybe<Array<CiJobStatus>>;
};


export type CiRunnerProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CiRunnerStatusArgs = {
  legacyMode?: InputMaybe<Scalars['String']>;
};

export type CiRunnerAccessLevel =
  /** A runner that is not protected. */
  | 'NOT_PROTECTED'
  /** A runner that is ref protected. */
  | 'REF_PROTECTED';

/** The connection type for CiRunner. */
export type CiRunnerConnection = {
  __typename?: 'CiRunnerConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiRunnerEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiRunner>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiRunnerEdge = {
  __typename?: 'CiRunnerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /**
   * Web URL of the runner edit page. The value depends on where you put this field
   * in the query. You can use it for projects or groups.
   */
  editUrl?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node?: Maybe<CiRunner>;
  /** Web URL of the runner. The value depends on where you put this field in the query. You can use it for projects or groups. */
  webUrl?: Maybe<Scalars['String']>;
};

/** Values for sorting runners */
export type CiRunnerSort =
  /** Ordered by contacted_at in ascending order. */
  | 'CONTACTED_ASC'
  /** Ordered by contacted_at in descending order. */
  | 'CONTACTED_DESC'
  /** Ordered by created_at in ascending order. */
  | 'CREATED_ASC'
  /** Ordered by created_at in descending order. */
  | 'CREATED_DESC'
  /** Ordered by token_expires_at in ascending order. */
  | 'TOKEN_EXPIRES_AT_ASC'
  /** Ordered by token_expires_at in descending order. */
  | 'TOKEN_EXPIRES_AT_DESC';

export type CiRunnerStatus =
  /** Runner that is not paused. Deprecated in 14.6: This was renamed. */
  | 'ACTIVE'
  /** Runner that has never contacted this instance. */
  | 'NEVER_CONTACTED'
  /**
   * Runner that has not contacted this instance within the last 2 hours. Will be
   * considered `STALE` if offline for more than 3 months.
   */
  | 'OFFLINE'
  /** Runner that contacted this instance within the last 2 hours. */
  | 'ONLINE'
  /** Runner that is paused. Deprecated in 14.6: This was renamed. */
  | 'PAUSED'
  /** Runner that has not contacted this instance within the last 3 months. */
  | 'STALE';

export type CiRunnerType =
  /** A runner that is group type. */
  | 'GROUP_TYPE'
  /** A runner that is instance type. */
  | 'INSTANCE_TYPE'
  /** A runner that is project type. */
  | 'PROJECT_TYPE';

export type CiRunnerUpgradeStatus =
  /** Upgrade is available for the runner. */
  | 'AVAILABLE'
  /** Runner version is not valid. */
  | 'INVALID'
  /** Upgrade is not available for the runner. */
  | 'NOT_AVAILABLE'
  /** Upgrade is available and recommended for the runner. */
  | 'RECOMMENDED';

export type CiStage = {
  __typename?: 'CiStage';
  /** Detailed status of the stage. */
  detailedStatus?: Maybe<DetailedStatus>;
  /** Group of jobs for the stage. */
  groups?: Maybe<CiGroupConnection>;
  /** ID of the stage. */
  id: Scalars['ID'];
  /** Jobs for the stage. */
  jobs?: Maybe<CiJobConnection>;
  /** Name of the stage. */
  name?: Maybe<Scalars['String']>;
  /** Status of the pipeline stage. */
  status?: Maybe<Scalars['String']>;
};


export type CiStageGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type CiStageJobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for CiStage. */
export type CiStageConnection = {
  __typename?: 'CiStageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CiStageEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CiStage>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CiStageEdge = {
  __typename?: 'CiStageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CiStage>;
};

/** GitLab CI/CD configuration template. */
export type CiTemplate = {
  __typename?: 'CiTemplate';
  /** Contents of the CI template. */
  content: Scalars['String'];
  /** Name of the CI template. */
  name: Scalars['String'];
};

export type CiVariable = {
  /** ID of the variable. */
  id: Scalars['ID'];
  /** Name of the variable. */
  key?: Maybe<Scalars['String']>;
  /** Indicates whether the variable is raw. */
  raw?: Maybe<Scalars['Boolean']>;
  /** Value of the variable. */
  value?: Maybe<Scalars['String']>;
  /** Type of the variable. */
  variableType?: Maybe<CiVariableType>;
};

/** Attributes for defining a CI/CD variable. */
export type CiVariableInput = {
  /** Name of the variable. */
  key: Scalars['String'];
  /** Value of the variable. */
  value: Scalars['String'];
};

export type CiVariableType =
  /** Env var type. */
  | 'ENV_VAR'
  /** File type. */
  | 'FILE';

export type ClusterAgent = {
  __typename?: 'ClusterAgent';
  /** Recent activity for the cluster agent. */
  activityEvents?: Maybe<ClusterAgentActivityEventConnection>;
  /** Active connections for the cluster agent */
  connections?: Maybe<ConnectedAgentConnection>;
  /** Timestamp the cluster agent was created. */
  createdAt?: Maybe<Scalars['Time']>;
  /** User object, containing information about the person who created the agent. */
  createdByUser?: Maybe<UserCore>;
  /** ID of the cluster agent. */
  id: Scalars['ID'];
  /** Name of the cluster agent. */
  name?: Maybe<Scalars['String']>;
  /** Project this cluster agent is associated with. */
  project?: Maybe<Project>;
  /** Tokens associated with the cluster agent. */
  tokens?: Maybe<ClusterAgentTokenConnection>;
  /** Timestamp the cluster agent was updated. */
  updatedAt?: Maybe<Scalars['Time']>;
  /** Web path of the cluster agent. */
  webPath?: Maybe<Scalars['String']>;
};


export type ClusterAgentActivityEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClusterAgentConnectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ClusterAgentTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<AgentTokenStatus>;
};

export type ClusterAgentActivityEvent = {
  __typename?: 'ClusterAgentActivityEvent';
  /** Agent token associated with the event. */
  agentToken?: Maybe<ClusterAgentToken>;
  /** Type of event. */
  kind?: Maybe<Scalars['String']>;
  /** Severity of the event. */
  level?: Maybe<Scalars['String']>;
  /** Timestamp the event was recorded. */
  recordedAt?: Maybe<Scalars['Time']>;
  /** User associated with the event. */
  user?: Maybe<UserCore>;
};

/** The connection type for ClusterAgentActivityEvent. */
export type ClusterAgentActivityEventConnection = {
  __typename?: 'ClusterAgentActivityEventConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ClusterAgentActivityEventEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ClusterAgentActivityEvent>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ClusterAgentActivityEventEdge = {
  __typename?: 'ClusterAgentActivityEventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ClusterAgentActivityEvent>;
};

/** The connection type for ClusterAgent. */
export type ClusterAgentConnection = {
  __typename?: 'ClusterAgentConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ClusterAgentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ClusterAgent>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of ClusterAgentDelete */
export type ClusterAgentDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the cluster agent that will be deleted. */
  id: Scalars['ClustersAgentID'];
};

/** Autogenerated return type of ClusterAgentDelete */
export type ClusterAgentDeletePayload = {
  __typename?: 'ClusterAgentDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** An edge in a connection. */
export type ClusterAgentEdge = {
  __typename?: 'ClusterAgentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ClusterAgent>;
};

export type ClusterAgentToken = {
  __typename?: 'ClusterAgentToken';
  /** Cluster agent this token is associated with. */
  clusterAgent?: Maybe<ClusterAgent>;
  /** Timestamp the token was created. */
  createdAt?: Maybe<Scalars['Time']>;
  /** User who created the token. */
  createdByUser?: Maybe<UserCore>;
  /** Description of the token. */
  description?: Maybe<Scalars['String']>;
  /** Global ID of the token. */
  id: Scalars['ClustersAgentTokenID'];
  /** Timestamp the token was last used. */
  lastUsedAt?: Maybe<Scalars['Time']>;
  /** Name given to the token. */
  name?: Maybe<Scalars['String']>;
  /** Current status of the token. */
  status?: Maybe<AgentTokenStatus>;
};

/** The connection type for ClusterAgentToken. */
export type ClusterAgentTokenConnection = {
  __typename?: 'ClusterAgentTokenConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ClusterAgentTokenEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ClusterAgentToken>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of ClusterAgentTokenCreate */
export type ClusterAgentTokenCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the cluster agent that will be associated with the new token. */
  clusterAgentId: Scalars['ClustersAgentID'];
  /** Description of the token. */
  description?: InputMaybe<Scalars['String']>;
  /** Name of the token. */
  name: Scalars['String'];
};

/** Autogenerated return type of ClusterAgentTokenCreate */
export type ClusterAgentTokenCreatePayload = {
  __typename?: 'ClusterAgentTokenCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Token secret value. Make sure you save it - you won't be able to access it again. */
  secret?: Maybe<Scalars['String']>;
  /** Token created after mutation. */
  token?: Maybe<ClusterAgentToken>;
};

/** An edge in a connection. */
export type ClusterAgentTokenEdge = {
  __typename?: 'ClusterAgentTokenEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ClusterAgentToken>;
};

/** Autogenerated input type of ClusterAgentTokenRevoke */
export type ClusterAgentTokenRevokeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the agent token that will be revoked. */
  id: Scalars['ClustersAgentTokenID'];
};

/** Autogenerated return type of ClusterAgentTokenRevoke */
export type ClusterAgentTokenRevokePayload = {
  __typename?: 'ClusterAgentTokenRevokePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

export type Commit = Todoable & {
  __typename?: 'Commit';
  /** Author of the commit. */
  author?: Maybe<UserCore>;
  /** Commit author's email. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Commit authors gravatar. */
  authorGravatar?: Maybe<Scalars['String']>;
  /** Commit authors name. */
  authorName?: Maybe<Scalars['String']>;
  /** Timestamp of when the commit was authored. */
  authoredDate?: Maybe<Scalars['Time']>;
  /** Description of the commit message. */
  description?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `description` */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** Full title of the commit message. */
  fullTitle?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `full_title` */
  fullTitleHtml?: Maybe<Scalars['String']>;
  /** ID (global ID) of the commit. */
  id: Scalars['ID'];
  /** Raw commit message. */
  message?: Maybe<Scalars['String']>;
  /** Pipelines of the commit ordered latest first. */
  pipelines?: Maybe<PipelineConnection>;
  /** SHA1 ID of the commit. */
  sha: Scalars['String'];
  /** Short SHA1 ID of the commit. */
  shortId: Scalars['String'];
  /** Rendered HTML of the commit signature. */
  signatureHtml?: Maybe<Scalars['String']>;
  /** Title of the commit message. */
  title?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `title` */
  titleHtml?: Maybe<Scalars['String']>;
  /** Web path of the commit. */
  webPath: Scalars['String'];
  /** Web URL of the commit. */
  webUrl: Scalars['String'];
};


export type CommitPipelinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<PipelineScopeEnum>;
  sha?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PipelineStatusEnum>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
  username?: InputMaybe<Scalars['String']>;
};

export type CommitAction = {
  /** Action to perform: create, delete, move, update, or chmod. */
  action: CommitActionMode;
  /** Content of the file. */
  content?: InputMaybe<Scalars['String']>;
  /** Encoding of the file. Default is text. */
  encoding?: InputMaybe<CommitEncoding>;
  /** Enables/disables the execute flag on the file. */
  executeFilemode?: InputMaybe<Scalars['Boolean']>;
  /** Full path to the file. */
  filePath: Scalars['String'];
  /** Last known file commit ID. */
  lastCommitId?: InputMaybe<Scalars['String']>;
  /** Original full path to the file being moved. */
  previousPath?: InputMaybe<Scalars['String']>;
};

/** Mode of a commit action */
export type CommitActionMode =
  /** Chmod command. */
  | 'CHMOD'
  /** Create command. */
  | 'CREATE'
  /** Delete command. */
  | 'DELETE'
  /** Move command. */
  | 'MOVE'
  /** Update command. */
  | 'UPDATE';

/** The connection type for Commit. */
export type CommitConnection = {
  __typename?: 'CommitConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommitEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Commit>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of CommitCreate */
export type CommitCreateInput = {
  /** Array of action hashes to commit as a batch. */
  actions: Array<CommitAction>;
  /** Name of the branch to commit into, it can be a new branch. */
  branch: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Raw commit message. */
  message: Scalars['String'];
  /** Project full path the branch is associated with. */
  projectPath: Scalars['ID'];
  /** If on a new branch, name of the original branch. */
  startBranch?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of CommitCreate */
export type CommitCreatePayload = {
  __typename?: 'CommitCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Commit after mutation. */
  commit?: Maybe<Commit>;
  /** ETag path for the commit's pipeline. */
  commitPipelinePath?: Maybe<Scalars['String']>;
  /** Contents of the commit. */
  content?: Maybe<Array<Scalars['String']>>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** An edge in a connection. */
export type CommitEdge = {
  __typename?: 'CommitEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Commit>;
};

export type CommitEncoding =
  /** Base64 encoding. */
  | 'BASE64'
  /** Text encoding. */
  | 'TEXT';

/** Composer metadata */
export type ComposerMetadata = {
  __typename?: 'ComposerMetadata';
  /** Data of the Composer JSON file. */
  composerJson: PackageComposerJsonType;
  /** Target SHA of the package. */
  targetSha: Scalars['String'];
};

/** Conan file metadata */
export type ConanFileMetadata = PackageFileMetadata & {
  __typename?: 'ConanFileMetadata';
  /** Type of the Conan file. */
  conanFileType: ConanMetadatumFileTypeEnum;
  /** Reference of the Conan package. */
  conanPackageReference?: Maybe<Scalars['String']>;
  /** Date of creation. */
  createdAt: Scalars['Time'];
  /** ID of the metadatum. */
  id: Scalars['PackagesConanFileMetadatumID'];
  /** Revision of the package. */
  packageRevision?: Maybe<Scalars['String']>;
  /** Revision of the Conan recipe. */
  recipeRevision: Scalars['String'];
  /** Date of most recent update. */
  updatedAt: Scalars['Time'];
};

/** Conan metadata */
export type ConanMetadata = {
  __typename?: 'ConanMetadata';
  /** Date of creation. */
  createdAt: Scalars['Time'];
  /** ID of the metadatum. */
  id: Scalars['PackagesConanMetadatumID'];
  /** Channel of the Conan package. */
  packageChannel: Scalars['String'];
  /** Username of the Conan package. */
  packageUsername: Scalars['String'];
  /** Recipe of the Conan package. */
  recipe: Scalars['String'];
  /** Recipe path of the Conan package. */
  recipePath: Scalars['String'];
  /** Date of most recent update. */
  updatedAt: Scalars['Time'];
};

/** Conan file types */
export type ConanMetadatumFileTypeEnum =
  /** A package file type. */
  | 'PACKAGE_FILE'
  /** A recipe file type. */
  | 'RECIPE_FILE';

/** Autogenerated input type of ConfigureSastIac */
export type ConfigureSastIacInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Full path of the project. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of ConfigureSastIac */
export type ConfigureSastIacPayload = {
  __typename?: 'ConfigureSastIacPayload';
  /** Branch that has the new/modified `.gitlab-ci.yml` file. */
  branch?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Redirect path to use when the response is successful. */
  successPath?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of ConfigureSast */
export type ConfigureSastInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** SAST CI configuration for the project. */
  configuration: SastCiConfigurationInput;
  /** Full path of the project. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of ConfigureSast */
export type ConfigureSastPayload = {
  __typename?: 'ConfigureSastPayload';
  /** Branch that has the new/modified `.gitlab-ci.yml` file. */
  branch?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Redirect path to use when the response is successful. */
  successPath?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of ConfigureSecretDetection */
export type ConfigureSecretDetectionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Full path of the project. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of ConfigureSecretDetection */
export type ConfigureSecretDetectionPayload = {
  __typename?: 'ConfigureSecretDetectionPayload';
  /** Branch that has the new/modified `.gitlab-ci.yml` file. */
  branch?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Redirect path to use when the response is successful. */
  successPath?: Maybe<Scalars['String']>;
};

/** Connection details for an Agent */
export type ConnectedAgent = {
  __typename?: 'ConnectedAgent';
  /** When the connection was established. */
  connectedAt?: Maybe<Scalars['Time']>;
  /** ID of the connection. */
  connectionId?: Maybe<Scalars['BigInt']>;
  /** Information about the Agent. */
  metadata?: Maybe<AgentMetadata>;
};

/** The connection type for ConnectedAgent. */
export type ConnectedAgentConnection = {
  __typename?: 'ConnectedAgentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ConnectedAgentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ConnectedAgent>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ConnectedAgentEdge = {
  __typename?: 'ConnectedAgentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ConnectedAgent>;
};

/** A tag expiration policy designed to keep only the images that matter most */
export type ContainerExpirationPolicy = {
  __typename?: 'ContainerExpirationPolicy';
  /** This container expiration policy schedule. */
  cadence: ContainerExpirationPolicyCadenceEnum;
  /** Timestamp of when the container expiration policy was created. */
  createdAt: Scalars['Time'];
  /** Indicates whether this container expiration policy is enabled. */
  enabled: Scalars['Boolean'];
  /** Number of tags to retain. */
  keepN?: Maybe<ContainerExpirationPolicyKeepEnum>;
  /** Tags with names matching this regex pattern will expire. */
  nameRegex?: Maybe<Scalars['UntrustedRegexp']>;
  /** Tags with names matching this regex pattern will be preserved. */
  nameRegexKeep?: Maybe<Scalars['UntrustedRegexp']>;
  /** Next time that this container expiration policy will get executed. */
  nextRunAt?: Maybe<Scalars['Time']>;
  /** Tags older that this will expire. */
  olderThan?: Maybe<ContainerExpirationPolicyOlderThanEnum>;
  /** Timestamp of when the container expiration policy was updated. */
  updatedAt: Scalars['Time'];
};

export type ContainerExpirationPolicyCadenceEnum =
  /** Every day */
  | 'EVERY_DAY'
  /** Every month */
  | 'EVERY_MONTH'
  /** Every three months */
  | 'EVERY_THREE_MONTHS'
  /** Every two weeks */
  | 'EVERY_TWO_WEEKS'
  /** Every week */
  | 'EVERY_WEEK';

export type ContainerExpirationPolicyKeepEnum =
  /** 50 tags per image name */
  | 'FIFTY_TAGS'
  /** 5 tags per image name */
  | 'FIVE_TAGS'
  /** 100 tags per image name */
  | 'ONE_HUNDRED_TAGS'
  /** 1 tag per image name */
  | 'ONE_TAG'
  /** 10 tags per image name */
  | 'TEN_TAGS'
  /** 25 tags per image name */
  | 'TWENTY_FIVE_TAGS';

export type ContainerExpirationPolicyOlderThanEnum =
  /** 14 days until tags are automatically removed */
  | 'FOURTEEN_DAYS'
  /** 90 days until tags are automatically removed */
  | 'NINETY_DAYS'
  /** 7 days until tags are automatically removed */
  | 'SEVEN_DAYS'
  /** 60 days until tags are automatically removed */
  | 'SIXTY_DAYS'
  /** 30 days until tags are automatically removed */
  | 'THIRTY_DAYS';

/** A container repository */
export type ContainerRepository = {
  __typename?: 'ContainerRepository';
  /** Can the current user delete the container repository. */
  canDelete: Scalars['Boolean'];
  /** Timestamp when the container repository was created. */
  createdAt: Scalars['Time'];
  /** Tags cleanup status for the container repository. */
  expirationPolicyCleanupStatus?: Maybe<ContainerRepositoryCleanupStatus>;
  /** Timestamp when the cleanup done by the expiration policy was started on the container repository. */
  expirationPolicyStartedAt?: Maybe<Scalars['Time']>;
  /** ID of the container repository. */
  id: Scalars['ID'];
  /** Number of deleted tags from the last cleanup. */
  lastCleanupDeletedTagsCount?: Maybe<Scalars['Int']>;
  /** URL of the container repository. */
  location: Scalars['String'];
  /** Migration state of the container repository. */
  migrationState: Scalars['String'];
  /** Name of the container repository. */
  name: Scalars['String'];
  /** Path of the container repository. */
  path: Scalars['String'];
  /** Project of the container registry. */
  project: Project;
  /** Status of the container repository. */
  status?: Maybe<ContainerRepositoryStatus>;
  /** Number of tags associated with this image. */
  tagsCount: Scalars['Int'];
  /** Timestamp when the container repository was updated. */
  updatedAt: Scalars['Time'];
};

/** Status of the tags cleanup of a container repository */
export type ContainerRepositoryCleanupStatus =
  /** Tags cleanup is ongoing. */
  | 'ONGOING'
  /** Tags cleanup is scheduled and is going to be executed shortly. */
  | 'SCHEDULED'
  /** Tags cleanup has been partially executed. There are still remaining tags to delete. */
  | 'UNFINISHED'
  /** Tags cleanup is not scheduled. This is the default state. */
  | 'UNSCHEDULED';

/** The connection type for ContainerRepository. */
export type ContainerRepositoryConnection = {
  __typename?: 'ContainerRepositoryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContainerRepositoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ContainerRepository>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Details of a container repository */
export type ContainerRepositoryDetails = {
  __typename?: 'ContainerRepositoryDetails';
  /** Can the current user delete the container repository. */
  canDelete: Scalars['Boolean'];
  /** Timestamp when the container repository was created. */
  createdAt: Scalars['Time'];
  /** Tags cleanup status for the container repository. */
  expirationPolicyCleanupStatus?: Maybe<ContainerRepositoryCleanupStatus>;
  /** Timestamp when the cleanup done by the expiration policy was started on the container repository. */
  expirationPolicyStartedAt?: Maybe<Scalars['Time']>;
  /** ID of the container repository. */
  id: Scalars['ID'];
  /** Number of deleted tags from the last cleanup. */
  lastCleanupDeletedTagsCount?: Maybe<Scalars['Int']>;
  /** URL of the container repository. */
  location: Scalars['String'];
  /** Migration state of the container repository. */
  migrationState: Scalars['String'];
  /** Name of the container repository. */
  name: Scalars['String'];
  /** Path of the container repository. */
  path: Scalars['String'];
  /** Project of the container registry. */
  project: Project;
  /**
   * Deduplicated size of the image repository in bytes. This is only available on
   * GitLab.com for repositories created after `2021-11-04`.
   */
  size?: Maybe<Scalars['Float']>;
  /** Status of the container repository. */
  status?: Maybe<ContainerRepositoryStatus>;
  /** Tags of the container repository. */
  tags?: Maybe<ContainerRepositoryTagConnection>;
  /** Number of tags associated with this image. */
  tagsCount: Scalars['Int'];
  /** Timestamp when the container repository was updated. */
  updatedAt: Scalars['Time'];
};


/** Details of a container repository */
export type ContainerRepositoryDetailsTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ContainerRepositoryTagSort>;
};

/** An edge in a connection. */
export type ContainerRepositoryEdge = {
  __typename?: 'ContainerRepositoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ContainerRepository>;
};

/** Values for sorting container repositories */
export type ContainerRepositorySort =
  /** Created at ascending order. */
  | 'CREATED_ASC'
  /** Created at descending order. */
  | 'CREATED_DESC'
  /** Name by ascending order. */
  | 'NAME_ASC'
  /** Name by descending order. */
  | 'NAME_DESC'
  /** Updated at ascending order. */
  | 'UPDATED_ASC'
  /** Updated at descending order. */
  | 'UPDATED_DESC'
  /** Created at ascending order. */
  | 'created_asc'
  /** Created at descending order. */
  | 'created_desc'
  /** Updated at ascending order. */
  | 'updated_asc'
  /** Updated at descending order. */
  | 'updated_desc';

/** Status of a container repository */
export type ContainerRepositoryStatus =
  /** Delete Failed status. */
  | 'DELETE_FAILED'
  /** Delete Scheduled status. */
  | 'DELETE_SCHEDULED';

/** A tag from a container repository */
export type ContainerRepositoryTag = {
  __typename?: 'ContainerRepositoryTag';
  /** Can the current user delete this tag. */
  canDelete: Scalars['Boolean'];
  /** Timestamp when the tag was created. */
  createdAt?: Maybe<Scalars['Time']>;
  /** Digest of the tag. */
  digest?: Maybe<Scalars['String']>;
  /** URL of the tag. */
  location: Scalars['String'];
  /** Name of the tag. */
  name: Scalars['String'];
  /** Path of the tag. */
  path: Scalars['String'];
  /** Revision of the tag. */
  revision?: Maybe<Scalars['String']>;
  /** Short revision of the tag. */
  shortRevision?: Maybe<Scalars['String']>;
  /** Size of the tag. */
  totalSize?: Maybe<Scalars['BigInt']>;
};

/** The connection type for ContainerRepositoryTag. */
export type ContainerRepositoryTagConnection = {
  __typename?: 'ContainerRepositoryTagConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContainerRepositoryTagEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ContainerRepositoryTag>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContainerRepositoryTagEdge = {
  __typename?: 'ContainerRepositoryTagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ContainerRepositoryTag>;
};

/** Values for sorting tags */
export type ContainerRepositoryTagSort =
  /** Ordered by name in ascending order. */
  | 'NAME_ASC'
  /** Ordered by name in descending order. */
  | 'NAME_DESC';

/** Autogenerated input type of CreateAlertIssue */
export type CreateAlertIssueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the alert to mutate. */
  iid: Scalars['String'];
  /** Project the alert to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of CreateAlertIssue */
export type CreateAlertIssuePayload = {
  __typename?: 'CreateAlertIssuePayload';
  /** Alert after mutation. */
  alert?: Maybe<AlertManagementAlert>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue created after mutation. */
  issue?: Maybe<Issue>;
  /** To-do item after mutation. */
  todo?: Maybe<Todo>;
};

/** Autogenerated input type of CreateAnnotation */
export type CreateAnnotationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the cluster to add an annotation to. */
  clusterId?: InputMaybe<Scalars['ClustersClusterID']>;
  /** Path to a file defining the dashboard on which the annotation should be added. */
  dashboardPath: Scalars['String'];
  /** Description of the annotation. */
  description: Scalars['String'];
  /** Timestamp indicating ending moment to which the annotation relates. */
  endingAt?: InputMaybe<Scalars['Time']>;
  /** Global ID of the environment to add an annotation to. */
  environmentId?: InputMaybe<Scalars['EnvironmentID']>;
  /** Timestamp indicating starting moment to which the annotation relates. */
  startingAt: Scalars['Time'];
};

/** Autogenerated return type of CreateAnnotation */
export type CreateAnnotationPayload = {
  __typename?: 'CreateAnnotationPayload';
  /** Created annotation. */
  annotation?: Maybe<MetricsDashboardAnnotation>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of CreateBoard */
export type CreateBoardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Full path of the group with which the resource is associated. */
  groupPath?: InputMaybe<Scalars['ID']>;
  /** Whether or not backlog list is hidden. */
  hideBacklogList?: InputMaybe<Scalars['Boolean']>;
  /** Whether or not closed list is hidden. */
  hideClosedList?: InputMaybe<Scalars['Boolean']>;
  /** Board name. */
  name?: InputMaybe<Scalars['String']>;
  /** Full path of the project with which the resource is associated. */
  projectPath?: InputMaybe<Scalars['ID']>;
};

/** Autogenerated return type of CreateBoard */
export type CreateBoardPayload = {
  __typename?: 'CreateBoardPayload';
  /** Board after mutation. */
  board?: Maybe<Board>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of CreateBranch */
export type CreateBranchInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Name of the branch. */
  name: Scalars['String'];
  /** Project full path the branch is associated with. */
  projectPath: Scalars['ID'];
  /** Branch name or commit SHA to create branch from. */
  ref: Scalars['String'];
};

/** Autogenerated return type of CreateBranch */
export type CreateBranchPayload = {
  __typename?: 'CreateBranchPayload';
  /** Branch after mutation. */
  branch?: Maybe<Branch>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of CreateClusterAgent */
export type CreateClusterAgentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Name of the cluster agent. */
  name: Scalars['String'];
  /** Full path of the associated project for this cluster agent. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of CreateClusterAgent */
export type CreateClusterAgentPayload = {
  __typename?: 'CreateClusterAgentPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Cluster agent created after mutation. */
  clusterAgent?: Maybe<ClusterAgent>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of CreateCustomEmoji */
export type CreateCustomEmojiInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Namespace full path the emoji is associated with. */
  groupPath: Scalars['ID'];
  /** Name of the emoji. */
  name: Scalars['String'];
  /** Location of the emoji file. */
  url: Scalars['String'];
};

/** Autogenerated return type of CreateCustomEmoji */
export type CreateCustomEmojiPayload = {
  __typename?: 'CreateCustomEmojiPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** New custom emoji. */
  customEmoji?: Maybe<CustomEmoji>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of CreateDiffNote */
export type CreateDiffNoteInput = {
  /** Content of the note. */
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Confidentiality flag of a note. Default is false. */
  confidential?: InputMaybe<Scalars['Boolean']>;
  /** Global ID of the resource to add a note to. */
  noteableId: Scalars['NoteableID'];
  /** Position of this note on a diff. */
  position: DiffPositionInput;
};

/** Autogenerated return type of CreateDiffNote */
export type CreateDiffNotePayload = {
  __typename?: 'CreateDiffNotePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Note after mutation. */
  note?: Maybe<Note>;
};

/** Autogenerated input type of CreateImageDiffNote */
export type CreateImageDiffNoteInput = {
  /** Content of the note. */
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Confidentiality flag of a note. Default is false. */
  confidential?: InputMaybe<Scalars['Boolean']>;
  /** Global ID of the resource to add a note to. */
  noteableId: Scalars['NoteableID'];
  /** Position of this note on a diff. */
  position: DiffImagePositionInput;
};

/** Autogenerated return type of CreateImageDiffNote */
export type CreateImageDiffNotePayload = {
  __typename?: 'CreateImageDiffNotePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Note after mutation. */
  note?: Maybe<Note>;
};

/** Autogenerated input type of CreateIssue */
export type CreateIssueInput = {
  /** Array of user IDs to assign to the issue. */
  assigneeIds?: InputMaybe<Array<Scalars['UserID']>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Indicates the issue is confidential. */
  confidential?: InputMaybe<Scalars['Boolean']>;
  /** Timestamp when the issue was created. Available only for admins and project owners. */
  createdAt?: InputMaybe<Scalars['Time']>;
  /** Description of the issue. */
  description?: InputMaybe<Scalars['String']>;
  /** ID of a discussion to resolve. Also pass `merge_request_to_resolve_discussions_of`. */
  discussionToResolve?: InputMaybe<Scalars['String']>;
  /** Due date of the issue. */
  dueDate?: InputMaybe<Scalars['ISO8601Date']>;
  /** IID (internal ID) of a project issue. Only admins and project owners can modify. */
  iid?: InputMaybe<Scalars['Int']>;
  /** IDs of labels to be added to the issue. */
  labelIds?: InputMaybe<Array<Scalars['LabelID']>>;
  /** Labels of the issue. */
  labels?: InputMaybe<Array<Scalars['String']>>;
  /** Indicates discussion is locked on the issue. */
  locked?: InputMaybe<Scalars['Boolean']>;
  /** IID of a merge request for which to resolve discussions. */
  mergeRequestToResolveDiscussionsOf?: InputMaybe<Scalars['MergeRequestID']>;
  /** ID of the milestone to assign to the issue. On update milestone will be removed if set to null. */
  milestoneId?: InputMaybe<Scalars['MilestoneID']>;
  /** Global ID of issue that should be placed after the current issue. */
  moveAfterId?: InputMaybe<Scalars['IssueID']>;
  /** Global ID of issue that should be placed before the current issue. */
  moveBeforeId?: InputMaybe<Scalars['IssueID']>;
  /** Project full path the issue is associated with. */
  projectPath: Scalars['ID'];
  /** Title of the issue. */
  title: Scalars['String'];
  /** Type of the issue. */
  type?: InputMaybe<IssueType>;
};

/** Autogenerated return type of CreateIssue */
export type CreateIssuePayload = {
  __typename?: 'CreateIssuePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue after mutation. */
  issue?: Maybe<Issue>;
};

/** Autogenerated input type of CreateNote */
export type CreateNoteInput = {
  /** Content of the note. */
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Confidentiality flag of a note. Default is false. */
  confidential?: InputMaybe<Scalars['Boolean']>;
  /** Global ID of the discussion this note is in reply to. */
  discussionId?: InputMaybe<Scalars['DiscussionID']>;
  /** SHA of the head commit which is used to ensure that the merge request has not been updated since the request was sent. */
  mergeRequestDiffHeadSha?: InputMaybe<Scalars['String']>;
  /** Global ID of the resource to add a note to. */
  noteableId: Scalars['NoteableID'];
};

/** Autogenerated return type of CreateNote */
export type CreateNotePayload = {
  __typename?: 'CreateNotePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Note after mutation. */
  note?: Maybe<Note>;
};

/** Autogenerated input type of CreateSnippet */
export type CreateSnippetInput = {
  /** Actions to perform over the snippet repository and blobs. */
  blobActions?: InputMaybe<Array<SnippetBlobActionInputType>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Description of the snippet. */
  description?: InputMaybe<Scalars['String']>;
  /** Full path of the project the snippet is associated with. */
  projectPath?: InputMaybe<Scalars['ID']>;
  /** Title of the snippet. */
  title: Scalars['String'];
  /** Paths to files uploaded in the snippet description. */
  uploadedFiles?: InputMaybe<Array<Scalars['String']>>;
  /** Visibility level of the snippet. */
  visibilityLevel: VisibilityLevelsEnum;
};

/** Autogenerated return type of CreateSnippet */
export type CreateSnippetPayload = {
  __typename?: 'CreateSnippetPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Snippet after mutation. */
  snippet?: Maybe<Snippet>;
};

export type CurrentUserTodos = {
  /** To-do items for the current user. */
  currentUserTodos: TodoConnection;
};


export type CurrentUserTodosCurrentUserTodosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<TodoStateEnum>;
};

/** A custom emoji uploaded by user */
export type CustomEmoji = {
  __typename?: 'CustomEmoji';
  /** Whether the emoji is an external link. */
  external: Scalars['Boolean'];
  /** ID of the emoji. */
  id: Scalars['CustomEmojiID'];
  /** Name of the emoji. */
  name: Scalars['String'];
  /** Link to file of the emoji. */
  url: Scalars['String'];
};

/** The connection type for CustomEmoji. */
export type CustomEmojiConnection = {
  __typename?: 'CustomEmojiConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CustomEmojiEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CustomEmoji>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CustomEmojiEdge = {
  __typename?: 'CustomEmojiEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CustomEmoji>;
};

export type CustomerRelationsContact = {
  __typename?: 'CustomerRelationsContact';
  /** State of the contact. */
  active: Scalars['Boolean'];
  /** Timestamp the contact was created. */
  createdAt: Scalars['Time'];
  /** Description of or notes for the contact. */
  description?: Maybe<Scalars['String']>;
  /** Email address of the contact. */
  email?: Maybe<Scalars['String']>;
  /** First name of the contact. */
  firstName: Scalars['String'];
  /** Internal ID of the contact. */
  id: Scalars['ID'];
  /** Last name of the contact. */
  lastName: Scalars['String'];
  /** Organization of the contact. */
  organization?: Maybe<CustomerRelationsOrganization>;
  /** Phone number of the contact. */
  phone?: Maybe<Scalars['String']>;
  /** Timestamp the contact was last updated. */
  updatedAt: Scalars['Time'];
};

/** The connection type for CustomerRelationsContact. */
export type CustomerRelationsContactConnection = {
  __typename?: 'CustomerRelationsContactConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CustomerRelationsContactEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CustomerRelationsContact>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of CustomerRelationsContactCreate */
export type CustomerRelationsContactCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Description of or notes for the contact. */
  description?: InputMaybe<Scalars['String']>;
  /** Email address of the contact. */
  email?: InputMaybe<Scalars['String']>;
  /** First name of the contact. */
  firstName: Scalars['String'];
  /** Group for the contact. */
  groupId: Scalars['GroupID'];
  /** Last name of the contact. */
  lastName: Scalars['String'];
  /** Organization for the contact. */
  organizationId?: InputMaybe<Scalars['CustomerRelationsOrganizationID']>;
  /** Phone number of the contact. */
  phone?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of CustomerRelationsContactCreate */
export type CustomerRelationsContactCreatePayload = {
  __typename?: 'CustomerRelationsContactCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Contact after the mutation. */
  contact?: Maybe<CustomerRelationsContact>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** An edge in a connection. */
export type CustomerRelationsContactEdge = {
  __typename?: 'CustomerRelationsContactEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CustomerRelationsContact>;
};

export type CustomerRelationsContactState =
  /** Active contact. */
  | 'active'
  /** Inactive contact. */
  | 'inactive';

/** Autogenerated input type of CustomerRelationsContactUpdate */
export type CustomerRelationsContactUpdateInput = {
  /** State of the contact. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Description of or notes for the contact. */
  description?: InputMaybe<Scalars['String']>;
  /** Email address of the contact. */
  email?: InputMaybe<Scalars['String']>;
  /** First name of the contact. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Global ID of the contact. */
  id: Scalars['CustomerRelationsContactID'];
  /** Last name of the contact. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Organization of the contact. */
  organizationId?: InputMaybe<Scalars['CustomerRelationsOrganizationID']>;
  /** Phone number of the contact. */
  phone?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of CustomerRelationsContactUpdate */
export type CustomerRelationsContactUpdatePayload = {
  __typename?: 'CustomerRelationsContactUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Contact after the mutation. */
  contact?: Maybe<CustomerRelationsContact>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

export type CustomerRelationsOrganization = {
  __typename?: 'CustomerRelationsOrganization';
  /** State of the organization. */
  active: Scalars['Boolean'];
  /** Timestamp the organization was created. */
  createdAt: Scalars['Time'];
  /** Standard billing rate for the organization. */
  defaultRate?: Maybe<Scalars['Float']>;
  /** Description of or notes for the organization. */
  description?: Maybe<Scalars['String']>;
  /** Internal ID of the organization. */
  id: Scalars['ID'];
  /** Name of the organization. */
  name: Scalars['String'];
  /** Timestamp the organization was last updated. */
  updatedAt: Scalars['Time'];
};

/** The connection type for CustomerRelationsOrganization. */
export type CustomerRelationsOrganizationConnection = {
  __typename?: 'CustomerRelationsOrganizationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CustomerRelationsOrganizationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CustomerRelationsOrganization>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of CustomerRelationsOrganizationCreate */
export type CustomerRelationsOrganizationCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Standard billing rate for the organization. */
  defaultRate?: InputMaybe<Scalars['Float']>;
  /** Description of or notes for the organization. */
  description?: InputMaybe<Scalars['String']>;
  /** Group for the organization. */
  groupId: Scalars['GroupID'];
  /** Name of the organization. */
  name: Scalars['String'];
};

/** Autogenerated return type of CustomerRelationsOrganizationCreate */
export type CustomerRelationsOrganizationCreatePayload = {
  __typename?: 'CustomerRelationsOrganizationCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Organization after the mutation. */
  organization?: Maybe<CustomerRelationsOrganization>;
};

/** An edge in a connection. */
export type CustomerRelationsOrganizationEdge = {
  __typename?: 'CustomerRelationsOrganizationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CustomerRelationsOrganization>;
};

export type CustomerRelationsOrganizationState =
  /** Active organization. */
  | 'active'
  /** Inactive organization. */
  | 'inactive';

/** Autogenerated input type of CustomerRelationsOrganizationUpdate */
export type CustomerRelationsOrganizationUpdateInput = {
  /** State of the organization. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Standard billing rate for the organization. */
  defaultRate?: InputMaybe<Scalars['Float']>;
  /** Description of or notes for the organization. */
  description?: InputMaybe<Scalars['String']>;
  /** Global ID of the organization. */
  id: Scalars['CustomerRelationsOrganizationID'];
  /** Name of the organization. */
  name?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of CustomerRelationsOrganizationUpdate */
export type CustomerRelationsOrganizationUpdatePayload = {
  __typename?: 'CustomerRelationsOrganizationUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Organization after the mutation. */
  organization: CustomerRelationsOrganization;
};

/** Autogenerated input type of DeleteAnnotation */
export type DeleteAnnotationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the annotation to delete. */
  id: Scalars['MetricsDashboardAnnotationID'];
};

/** Autogenerated return type of DeleteAnnotation */
export type DeleteAnnotationPayload = {
  __typename?: 'DeleteAnnotationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** The response from the AdminSidekiqQueuesDeleteJobs mutation */
export type DeleteJobsResponse = {
  __typename?: 'DeleteJobsResponse';
  /** Whether or not the entire queue was processed in time; if not, retrying the same request is safe. */
  completed?: Maybe<Scalars['Boolean']>;
  /** Number of matching jobs deleted. */
  deletedJobs?: Maybe<Scalars['Int']>;
  /** Queue size after processing. */
  queueSize?: Maybe<Scalars['Int']>;
};

/** Represents metadata associated with a dependency link */
export type DependencyLinkMetadata = NugetDependencyLinkMetadata;

/** Dependency proxy blob */
export type DependencyProxyBlob = {
  __typename?: 'DependencyProxyBlob';
  /** Date of creation. */
  createdAt: Scalars['Time'];
  /** Name of the blob. */
  fileName: Scalars['String'];
  /** Size of the blob file. */
  size: Scalars['String'];
  /** Date of most recent update. */
  updatedAt: Scalars['Time'];
};

/** The connection type for DependencyProxyBlob. */
export type DependencyProxyBlobConnection = {
  __typename?: 'DependencyProxyBlobConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DependencyProxyBlobEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<DependencyProxyBlob>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DependencyProxyBlobEdge = {
  __typename?: 'DependencyProxyBlobEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<DependencyProxyBlob>;
};

/** Group-level Dependency Proxy TTL policy settings */
export type DependencyProxyImageTtlGroupPolicy = {
  __typename?: 'DependencyProxyImageTtlGroupPolicy';
  /** Timestamp of creation. */
  createdAt?: Maybe<Scalars['Time']>;
  /** Indicates whether the policy is enabled or disabled. */
  enabled: Scalars['Boolean'];
  /** Number of days to retain a cached image file. */
  ttl?: Maybe<Scalars['Int']>;
  /** Timestamp of the most recent update. */
  updatedAt?: Maybe<Scalars['Time']>;
};

/** Dependency proxy manifest */
export type DependencyProxyManifest = {
  __typename?: 'DependencyProxyManifest';
  /** Date of creation. */
  createdAt: Scalars['Time'];
  /** Digest of the manifest. */
  digest: Scalars['String'];
  /** Name of the manifest. */
  fileName: Scalars['String'];
  /** ID of the manifest. */
  id: Scalars['DependencyProxyManifestID'];
  /** Name of the image. */
  imageName: Scalars['String'];
  /** Size of the manifest file. */
  size: Scalars['String'];
  /** Status of the manifest (default, pending_destruction, processing, error) */
  status: DependencyProxyManifestStatus;
  /** Date of most recent update. */
  updatedAt: Scalars['Time'];
};

/** The connection type for DependencyProxyManifest. */
export type DependencyProxyManifestConnection = {
  __typename?: 'DependencyProxyManifestConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DependencyProxyManifestEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<DependencyProxyManifest>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DependencyProxyManifestEdge = {
  __typename?: 'DependencyProxyManifestEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<DependencyProxyManifest>;
};

export type DependencyProxyManifestStatus =
  /** Dependency proxy manifest has a status of default. */
  | 'DEFAULT'
  /** Dependency proxy manifest has a status of error. */
  | 'ERROR'
  /** Dependency proxy manifest has a status of pending_destruction. */
  | 'PENDING_DESTRUCTION'
  /** Dependency proxy manifest has a status of processing. */
  | 'PROCESSING';

/** Group-level Dependency Proxy settings */
export type DependencyProxySetting = {
  __typename?: 'DependencyProxySetting';
  /** Indicates whether the dependency proxy is enabled for the group. */
  enabled: Scalars['Boolean'];
};

/** A single design */
export type Design = CurrentUserTodos & DesignFields & NoteableInterface & Todoable & {
  __typename?: 'Design';
  /** To-do items for the current user. */
  currentUserTodos: TodoConnection;
  /** Diff refs for this design. */
  diffRefs: DiffRefs;
  /** All discussions on this noteable. */
  discussions: DiscussionConnection;
  /** How this design was changed in the current version. */
  event: DesignVersionEvent;
  /** Filename of the design. */
  filename: Scalars['String'];
  /** Full path to the design file. */
  fullPath: Scalars['String'];
  /** ID of this design. */
  id: Scalars['ID'];
  /** URL of the full-sized image. */
  image: Scalars['String'];
  /** The URL of the design resized to fit within the bounds of 432x230. This will be `null` if the image has not been generated */
  imageV432x230?: Maybe<Scalars['String']>;
  /** Issue the design belongs to. */
  issue: Issue;
  /** All notes on this noteable. */
  notes: NoteConnection;
  /** Total count of user-created notes for this design. */
  notesCount: Scalars['Int'];
  /** Project the design belongs to. */
  project: Project;
  /** All versions related to this design ordered newest first. */
  versions: DesignVersionConnection;
  /** URL of the design. */
  webUrl: Scalars['String'];
};


/** A single design */
export type DesignCurrentUserTodosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<TodoStateEnum>;
};


/** A single design */
export type DesignDiscussionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A single design */
export type DesignNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A single design */
export type DesignVersionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  earlierOrEqualToId?: InputMaybe<Scalars['DesignManagementVersionID']>;
  earlierOrEqualToSha?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A design pinned to a specific version. The image field reflects the design as of the associated version */
export type DesignAtVersion = DesignFields & {
  __typename?: 'DesignAtVersion';
  /** Underlying design. */
  design: Design;
  /** Diff refs for this design. */
  diffRefs: DiffRefs;
  /** How this design was changed in the current version. */
  event: DesignVersionEvent;
  /** Filename of the design. */
  filename: Scalars['String'];
  /** Full path to the design file. */
  fullPath: Scalars['String'];
  /** ID of this design. */
  id: Scalars['ID'];
  /** URL of the full-sized image. */
  image: Scalars['String'];
  /** The URL of the design resized to fit within the bounds of 432x230. This will be `null` if the image has not been generated */
  imageV432x230?: Maybe<Scalars['String']>;
  /** Issue the design belongs to. */
  issue: Issue;
  /** Total count of user-created notes for this design. */
  notesCount: Scalars['Int'];
  /** Project the design belongs to. */
  project: Project;
  /** Version this design-at-versions is pinned to. */
  version: DesignVersion;
};

/** The connection type for DesignAtVersion. */
export type DesignAtVersionConnection = {
  __typename?: 'DesignAtVersionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DesignAtVersionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<DesignAtVersion>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DesignAtVersionEdge = {
  __typename?: 'DesignAtVersionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<DesignAtVersion>;
};

/** A collection of designs */
export type DesignCollection = {
  __typename?: 'DesignCollection';
  /** Copy state of the design collection. */
  copyState?: Maybe<DesignCollectionCopyState>;
  /** Find a specific design. */
  design?: Maybe<Design>;
  /** Find a design as of a version. */
  designAtVersion?: Maybe<DesignAtVersion>;
  /** All designs for the design collection. */
  designs: DesignConnection;
  /** Issue associated with the design collection. */
  issue: Issue;
  /** Project associated with the design collection. */
  project: Project;
  /** A specific version. */
  version?: Maybe<DesignVersion>;
  /** All versions related to all designs, ordered newest first. */
  versions: DesignVersionConnection;
};


/** A collection of designs */
export type DesignCollectionDesignArgs = {
  filename?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['DesignManagementDesignID']>;
};


/** A collection of designs */
export type DesignCollectionDesignAtVersionArgs = {
  id: Scalars['DesignManagementDesignAtVersionID'];
};


/** A collection of designs */
export type DesignCollectionDesignsArgs = {
  after?: InputMaybe<Scalars['String']>;
  atVersion?: InputMaybe<Scalars['DesignManagementVersionID']>;
  before?: InputMaybe<Scalars['String']>;
  filenames?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['DesignManagementDesignID']>>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A collection of designs */
export type DesignCollectionVersionArgs = {
  id?: InputMaybe<Scalars['DesignManagementVersionID']>;
  sha?: InputMaybe<Scalars['String']>;
};


/** A collection of designs */
export type DesignCollectionVersionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  earlierOrEqualToId?: InputMaybe<Scalars['DesignManagementVersionID']>;
  earlierOrEqualToSha?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Copy state of a DesignCollection */
export type DesignCollectionCopyState =
  /** The DesignCollection encountered an error during a copy */
  | 'ERROR'
  /** The DesignCollection is being copied */
  | 'IN_PROGRESS'
  /** The DesignCollection has no copy in progress */
  | 'READY';

/** The connection type for Design. */
export type DesignConnection = {
  __typename?: 'DesignConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DesignEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Design>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DesignEdge = {
  __typename?: 'DesignEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Design>;
};

export type DesignFields = {
  /** Diff refs for this design. */
  diffRefs: DiffRefs;
  /** How this design was changed in the current version. */
  event: DesignVersionEvent;
  /** Filename of the design. */
  filename: Scalars['String'];
  /** Full path to the design file. */
  fullPath: Scalars['String'];
  /** ID of this design. */
  id: Scalars['ID'];
  /** URL of the full-sized image. */
  image: Scalars['String'];
  /** The URL of the design resized to fit within the bounds of 432x230. This will be `null` if the image has not been generated */
  imageV432x230?: Maybe<Scalars['String']>;
  /** Issue the design belongs to. */
  issue: Issue;
  /** Total count of user-created notes for this design. */
  notesCount: Scalars['Int'];
  /** Project the design belongs to. */
  project: Project;
};

export type DesignManagement = {
  __typename?: 'DesignManagement';
  /** Find a design as of a version. */
  designAtVersion?: Maybe<DesignAtVersion>;
  /** Find a version. */
  version?: Maybe<DesignVersion>;
};


export type DesignManagementDesignAtVersionArgs = {
  id: Scalars['DesignManagementDesignAtVersionID'];
};


export type DesignManagementVersionArgs = {
  id: Scalars['DesignManagementVersionID'];
};

/** Autogenerated input type of DesignManagementDelete */
export type DesignManagementDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Filenames of the designs to delete. */
  filenames: Array<Scalars['String']>;
  /** IID of the issue to modify designs for. */
  iid: Scalars['ID'];
  /** Project where the issue is to upload designs for. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of DesignManagementDelete */
export type DesignManagementDeletePayload = {
  __typename?: 'DesignManagementDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** New version in which the designs are deleted. */
  version?: Maybe<DesignVersion>;
};

/** Autogenerated input type of DesignManagementMove */
export type DesignManagementMoveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the design to move. */
  id: Scalars['DesignManagementDesignID'];
  /** ID of the immediately following design. */
  next?: InputMaybe<Scalars['DesignManagementDesignID']>;
  /** ID of the immediately preceding design. */
  previous?: InputMaybe<Scalars['DesignManagementDesignID']>;
};

/** Autogenerated return type of DesignManagementMove */
export type DesignManagementMovePayload = {
  __typename?: 'DesignManagementMovePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Current state of the collection. */
  designCollection?: Maybe<DesignCollection>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of DesignManagementUpload */
export type DesignManagementUploadInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Files to upload. */
  files: Array<Scalars['Upload']>;
  /** IID of the issue to modify designs for. */
  iid: Scalars['ID'];
  /** Project where the issue is to upload designs for. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of DesignManagementUpload */
export type DesignManagementUploadPayload = {
  __typename?: 'DesignManagementUploadPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Designs that were uploaded by the mutation. */
  designs: Array<Design>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Any designs that were skipped from the upload due to there being no change to their content since their last version */
  skippedDesigns: Array<Design>;
};

/** A specific version in which designs were added, modified or deleted */
export type DesignVersion = {
  __typename?: 'DesignVersion';
  /** Author of the version. */
  author: UserCore;
  /** Timestamp of when the version was created. */
  createdAt: Scalars['Time'];
  /** A particular design as of this version, provided it is visible at this version. */
  designAtVersion: DesignAtVersion;
  /** All designs that were changed in the version. */
  designs: DesignConnection;
  /** All designs that are visible at this version, as of this version. */
  designsAtVersion: DesignAtVersionConnection;
  /** ID of the design version. */
  id: Scalars['ID'];
  /** SHA of the design version. */
  sha: Scalars['ID'];
};


/** A specific version in which designs were added, modified or deleted */
export type DesignVersionDesignAtVersionArgs = {
  designId?: InputMaybe<Scalars['DesignManagementDesignID']>;
  filename?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['DesignManagementDesignAtVersionID']>;
};


/** A specific version in which designs were added, modified or deleted */
export type DesignVersionDesignsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A specific version in which designs were added, modified or deleted */
export type DesignVersionDesignsAtVersionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filenames?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['DesignManagementDesignID']>>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for DesignVersion. */
export type DesignVersionConnection = {
  __typename?: 'DesignVersionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DesignVersionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<DesignVersion>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DesignVersionEdge = {
  __typename?: 'DesignVersionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<DesignVersion>;
};

/** Mutation event of a design within a version */
export type DesignVersionEvent =
  /** A creation event */
  | 'CREATION'
  /** A deletion event */
  | 'DELETION'
  /** A modification event */
  | 'MODIFICATION'
  /** No change. */
  | 'NONE';

/** Autogenerated input type of DestroyBoard */
export type DestroyBoardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the board to destroy. */
  id: Scalars['BoardID'];
};

/** Autogenerated input type of DestroyBoardList */
export type DestroyBoardListInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the list to destroy. Only label lists are accepted. */
  listId: Scalars['ListID'];
};

/** Autogenerated return type of DestroyBoardList */
export type DestroyBoardListPayload = {
  __typename?: 'DestroyBoardListPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** List after mutation. */
  list?: Maybe<BoardList>;
};

/** Autogenerated return type of DestroyBoard */
export type DestroyBoardPayload = {
  __typename?: 'DestroyBoardPayload';
  /** Board after mutation. */
  board?: Maybe<Board>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of DestroyContainerRepository */
export type DestroyContainerRepositoryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the container repository. */
  id: Scalars['ContainerRepositoryID'];
};

/** Autogenerated return type of DestroyContainerRepository */
export type DestroyContainerRepositoryPayload = {
  __typename?: 'DestroyContainerRepositoryPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Container repository policy after scheduling the deletion. */
  containerRepository: ContainerRepository;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of DestroyContainerRepositoryTags */
export type DestroyContainerRepositoryTagsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the container repository. */
  id: Scalars['ContainerRepositoryID'];
  /** Container repository tag(s) to delete. Total number can't be greater than 20 */
  tagNames: Array<Scalars['String']>;
};

/** Autogenerated return type of DestroyContainerRepositoryTags */
export type DestroyContainerRepositoryTagsPayload = {
  __typename?: 'DestroyContainerRepositoryTagsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Deleted container repository tags. */
  deletedTagNames: Array<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of DestroyCustomEmoji */
export type DestroyCustomEmojiInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the custom emoji to destroy. */
  id: Scalars['CustomEmojiID'];
};

/** Autogenerated return type of DestroyCustomEmoji */
export type DestroyCustomEmojiPayload = {
  __typename?: 'DestroyCustomEmojiPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Deleted custom emoji. */
  customEmoji?: Maybe<CustomEmoji>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of DestroyNote */
export type DestroyNoteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the note to destroy. */
  id: Scalars['NoteID'];
};

/** Autogenerated return type of DestroyNote */
export type DestroyNotePayload = {
  __typename?: 'DestroyNotePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Note after mutation. */
  note?: Maybe<Note>;
};

/** Autogenerated input type of DestroyPackageFile */
export type DestroyPackageFileInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the Package file. */
  id: Scalars['PackagesPackageFileID'];
};

/** Autogenerated return type of DestroyPackageFile */
export type DestroyPackageFilePayload = {
  __typename?: 'DestroyPackageFilePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of DestroyPackageFiles */
export type DestroyPackageFilesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IDs of the Package file. */
  ids: Array<Scalars['PackagesPackageFileID']>;
  /** Project path where the packages cleanup policy is located. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of DestroyPackageFiles */
export type DestroyPackageFilesPayload = {
  __typename?: 'DestroyPackageFilesPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of DestroyPackage */
export type DestroyPackageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the Package. */
  id: Scalars['PackagesPackageID'];
};

/** Autogenerated return type of DestroyPackage */
export type DestroyPackagePayload = {
  __typename?: 'DestroyPackagePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of DestroySnippet */
export type DestroySnippetInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the snippet to destroy. */
  id: Scalars['SnippetID'];
};

/** Autogenerated return type of DestroySnippet */
export type DestroySnippetPayload = {
  __typename?: 'DestroySnippetPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Snippet after mutation. */
  snippet?: Maybe<Snippet>;
};

export type DetailedStatus = {
  __typename?: 'DetailedStatus';
  /** Action information for the status. This includes method, button title, icon, path, and title. */
  action?: Maybe<StatusAction>;
  /** Path of the details for the status. */
  detailsPath?: Maybe<Scalars['String']>;
  /** Favicon of the status. */
  favicon?: Maybe<Scalars['String']>;
  /** Group of the status. */
  group?: Maybe<Scalars['String']>;
  /** Indicates if the status has further details. */
  hasDetails?: Maybe<Scalars['Boolean']>;
  /** Icon of the status. */
  icon?: Maybe<Scalars['String']>;
  /** ID for a detailed status. */
  id: Scalars['String'];
  /** Label of the status. */
  label?: Maybe<Scalars['String']>;
  /** Text of the status. */
  text?: Maybe<Scalars['String']>;
  /** Tooltip associated with the status. */
  tooltip?: Maybe<Scalars['String']>;
};

export type DiffImagePositionInput = {
  /** Merge base of the branch the comment was made on. */
  baseSha?: InputMaybe<Scalars['String']>;
  /** SHA of the HEAD at the time the comment was made. */
  headSha: Scalars['String'];
  /** Total height of the image. */
  height: Scalars['Int'];
  /**
   * The paths of the file that was changed. Both of the properties of this input
   * are optional, but at least one of them is required
   */
  paths: DiffPathsInput;
  /** SHA of the branch being compared against. */
  startSha: Scalars['String'];
  /** Total width of the image. */
  width: Scalars['Int'];
  /** X position of the note. */
  x: Scalars['Int'];
  /** Y position of the note. */
  y: Scalars['Int'];
};

export type DiffPathsInput = {
  /** Path of the file on the HEAD SHA. */
  newPath?: InputMaybe<Scalars['String']>;
  /** Path of the file on the start SHA. */
  oldPath?: InputMaybe<Scalars['String']>;
};

export type DiffPosition = {
  __typename?: 'DiffPosition';
  /** Information about the branch, HEAD, and base at the time of commenting. */
  diffRefs: DiffRefs;
  /** Path of the file that was changed. */
  filePath: Scalars['String'];
  /** Total height of the image. */
  height?: Maybe<Scalars['Int']>;
  /** Line on HEAD SHA that was changed. */
  newLine?: Maybe<Scalars['Int']>;
  /** Path of the file on the HEAD SHA. */
  newPath?: Maybe<Scalars['String']>;
  /** Line on start SHA that was changed. */
  oldLine?: Maybe<Scalars['Int']>;
  /** Path of the file on the start SHA. */
  oldPath?: Maybe<Scalars['String']>;
  /** Type of file the position refers to. */
  positionType: DiffPositionType;
  /** Total width of the image. */
  width?: Maybe<Scalars['Int']>;
  /** X position of the note. */
  x?: Maybe<Scalars['Int']>;
  /** Y position of the note. */
  y?: Maybe<Scalars['Int']>;
};

export type DiffPositionInput = {
  /** Merge base of the branch the comment was made on. */
  baseSha?: InputMaybe<Scalars['String']>;
  /** SHA of the HEAD at the time the comment was made. */
  headSha: Scalars['String'];
  /**
   * Line on HEAD SHA that was changed. Please see the [REST API Documentation](https://docs.gitlab.com/ee/api/discussions.html#create-a-new-thread-in-the-merge-request-diff)
   * for more information on how to use this field.
   */
  newLine?: InputMaybe<Scalars['Int']>;
  /**
   * Line on start SHA that was changed. Please see the [REST API Documentation](https://docs.gitlab.com/ee/api/discussions.html#create-a-new-thread-in-the-merge-request-diff)
   * for more information on how to use this field.
   */
  oldLine?: InputMaybe<Scalars['Int']>;
  /**
   * The paths of the file that was changed. Both of the properties of this input
   * are optional, but at least one of them is required
   */
  paths: DiffPathsInput;
  /** SHA of the branch being compared against. */
  startSha: Scalars['String'];
};

/** Type of file the position refers to */
export type DiffPositionType =
  /** An image. */
  | 'image'
  /** Text file. */
  | 'text';

export type DiffRefs = {
  __typename?: 'DiffRefs';
  /** Merge base of the branch the comment was made on. */
  baseSha?: Maybe<Scalars['String']>;
  /** SHA of the HEAD at the time the comment was made. */
  headSha: Scalars['String'];
  /** SHA of the branch being compared against. */
  startSha: Scalars['String'];
};

/** Changes to a single file */
export type DiffStats = {
  __typename?: 'DiffStats';
  /** Number of lines added to this file. */
  additions: Scalars['Int'];
  /** Number of lines deleted from this file. */
  deletions: Scalars['Int'];
  /** File path, relative to repository root. */
  path: Scalars['String'];
};

/** Aggregated summary of changes */
export type DiffStatsSummary = {
  __typename?: 'DiffStatsSummary';
  /** Number of lines added. */
  additions: Scalars['Int'];
  /** Number of lines changed. */
  changes: Scalars['Int'];
  /** Number of lines deleted. */
  deletions: Scalars['Int'];
  /** Number of files changed. */
  fileCount: Scalars['Int'];
};

export type Discussion = ResolvableInterface & {
  __typename?: 'Discussion';
  /** Timestamp of the discussion's creation. */
  createdAt: Scalars['Time'];
  /** ID of this discussion. */
  id: Scalars['DiscussionID'];
  /** Object which the discussion belongs to. */
  noteable?: Maybe<NoteableType>;
  /** All notes in the discussion. */
  notes: NoteConnection;
  /** ID used to reply to this discussion. */
  replyId: Scalars['DiscussionID'];
  /** Indicates if the object can be resolved. */
  resolvable: Scalars['Boolean'];
  /** Indicates if the object is resolved. */
  resolved: Scalars['Boolean'];
  /** Timestamp of when the object was resolved. */
  resolvedAt?: Maybe<Scalars['Time']>;
  /** User who resolved the object. */
  resolvedBy?: Maybe<UserCore>;
};


export type DiscussionNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Discussion. */
export type DiscussionConnection = {
  __typename?: 'DiscussionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DiscussionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Discussion>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DiscussionEdge = {
  __typename?: 'DiscussionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Discussion>;
};

/** Autogenerated input type of DiscussionToggleResolve */
export type DiscussionToggleResolveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the discussion. */
  id: Scalars['DiscussionID'];
  /** Will resolve the discussion when true, and unresolve the discussion when false. */
  resolve: Scalars['Boolean'];
};

/** Autogenerated return type of DiscussionToggleResolve */
export type DiscussionToggleResolvePayload = {
  __typename?: 'DiscussionToggleResolvePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Discussion after mutation. */
  discussion?: Maybe<Discussion>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of EchoCreate */
export type EchoCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Errors to return to the user. */
  errors?: InputMaybe<Array<Scalars['String']>>;
  /** Messages to return to the user. */
  messages?: InputMaybe<Array<Scalars['String']>>;
};

/** Autogenerated return type of EchoCreate */
export type EchoCreatePayload = {
  __typename?: 'EchoCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Messages returned to the user. */
  echoes?: Maybe<Array<Scalars['String']>>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

export type Entry = {
  /** Flat path of the entry. */
  flatPath: Scalars['String'];
  /** ID of the entry. */
  id: Scalars['ID'];
  /** Name of the entry. */
  name: Scalars['String'];
  /** Path of the entry. */
  path: Scalars['String'];
  /** Last commit SHA for the entry. */
  sha: Scalars['String'];
  /** Type of tree entry. */
  type: EntryType;
};

/** Type of a tree entry */
export type EntryType =
  /** File tree type. */
  | 'blob'
  /** Commit tree type. */
  | 'commit'
  /** Directory tree type. */
  | 'tree';

/** Describes where code is deployed for a project */
export type Environment = {
  __typename?: 'Environment';
  /** ID of the environment. */
  id: Scalars['ID'];
  /** Most severe open alert for the environment. If multiple alerts have equal severity, the most recent is returned. */
  latestOpenedMostSevereAlert?: Maybe<AlertManagementAlert>;
  /** Metrics dashboard schema for the environment. */
  metricsDashboard?: Maybe<MetricsDashboard>;
  /** Human-readable name of the environment. */
  name: Scalars['String'];
  /** Path to the environment. */
  path: Scalars['String'];
  /** State of the environment, for example: available/stopped. */
  state: Scalars['String'];
};


/** Describes where code is deployed for a project */
export type EnvironmentMetricsDashboardArgs = {
  path: Scalars['String'];
};

/** The connection type for Environment. */
export type EnvironmentConnection = {
  __typename?: 'EnvironmentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EnvironmentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Environment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EnvironmentEdge = {
  __typename?: 'EnvironmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Environment>;
};

/** Autogenerated input type of EnvironmentsCanaryIngressUpdate */
export type EnvironmentsCanaryIngressUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the environment to update. */
  id: Scalars['EnvironmentID'];
  /** Weight of the Canary Ingress. */
  weight: Scalars['Int'];
};

/** Autogenerated return type of EnvironmentsCanaryIngressUpdate */
export type EnvironmentsCanaryIngressUpdatePayload = {
  __typename?: 'EnvironmentsCanaryIngressUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

export type FileUpload = {
  __typename?: 'FileUpload';
  /** Global ID of the upload. */
  id: Scalars['UploadID'];
  /** Path of the upload. */
  path: Scalars['String'];
  /** Size of the upload in bytes. */
  size: Scalars['Int'];
};

export type GrafanaIntegration = {
  __typename?: 'GrafanaIntegration';
  /** Timestamp of the issue's creation. */
  createdAt: Scalars['Time'];
  /** Indicates whether Grafana integration is enabled. */
  enabled: Scalars['Boolean'];
  /** URL for the Grafana host for the Grafana integration. */
  grafanaUrl: Scalars['String'];
  /** Internal ID of the Grafana integration. */
  id: Scalars['ID'];
  /** Timestamp of the issue's last activity. */
  updatedAt: Scalars['Time'];
};

export type Group = {
  __typename?: 'Group';
  /** Indicates whether Auto DevOps is enabled for all projects within this group. */
  autoDevopsEnabled?: Maybe<Scalars['Boolean']>;
  /** Avatar URL of the group. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** A single board of the group. */
  board?: Maybe<Board>;
  /** Boards of the group. */
  boards?: Maybe<BoardConnection>;
  /** List of the group's CI/CD variables. */
  ciVariables?: Maybe<CiGroupVariableConnection>;
  /** Find contacts of this group. */
  contacts?: Maybe<CustomerRelationsContactConnection>;
  /** Container repositories of the group. */
  containerRepositories?: Maybe<ContainerRepositoryConnection>;
  /** Number of container repositories in the group. */
  containerRepositoriesCount: Scalars['Int'];
  /** Indicates if the cross_project_pipeline feature is available for the namespace. */
  crossProjectPipelineAvailable: Scalars['Boolean'];
  /**
   * Custom emoji within this namespace. Available only when feature flag
   * `custom_emoji` is enabled. This flag is disabled by default, because the
   * feature is experimental and is subject to change without notice.
   */
  customEmoji?: Maybe<CustomEmojiConnection>;
  /** Number of dependency proxy blobs cached in the group. */
  dependencyProxyBlobCount: Scalars['Int'];
  /** Dependency Proxy blobs. */
  dependencyProxyBlobs?: Maybe<DependencyProxyBlobConnection>;
  /** Number of dependency proxy images cached in the group. */
  dependencyProxyImageCount: Scalars['Int'];
  /** Prefix for pulling images when using the dependency proxy. */
  dependencyProxyImagePrefix: Scalars['String'];
  /** Dependency proxy TTL policy for the group. */
  dependencyProxyImageTtlPolicy?: Maybe<DependencyProxyImageTtlGroupPolicy>;
  /** Dependency Proxy manifests. */
  dependencyProxyManifests?: Maybe<DependencyProxyManifestConnection>;
  /** Dependency Proxy settings for the group. */
  dependencyProxySetting?: Maybe<DependencyProxySetting>;
  /** Total size of the dependency proxy cached images. */
  dependencyProxyTotalSize: Scalars['String'];
  /** List of descendant groups of this group. */
  descendantGroups?: Maybe<GroupConnection>;
  /** Description of the namespace. */
  description?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `description` */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** Indicates if a group has email notifications disabled. */
  emailsDisabled?: Maybe<Scalars['Boolean']>;
  /** Full name of the namespace. */
  fullName: Scalars['String'];
  /** Full path of the namespace. */
  fullPath: Scalars['ID'];
  /** A membership of a user within this group. */
  groupMembers?: Maybe<GroupMemberConnection>;
  /** ID of the namespace. */
  id: Scalars['ID'];
  /** Issues for projects in this group. */
  issues?: Maybe<IssueConnection>;
  /** Label available on this group. */
  label?: Maybe<Label>;
  /** Labels available on this group. */
  labels?: Maybe<LabelConnection>;
  /** Indicates if Large File Storage (LFS) is enabled for namespace. */
  lfsEnabled?: Maybe<Scalars['Boolean']>;
  /** Indicates if a group is disabled from getting mentioned. */
  mentionsDisabled?: Maybe<Scalars['Boolean']>;
  /** Merge requests for projects in this group. */
  mergeRequests?: Maybe<MergeRequestConnection>;
  /** Milestones of the group. */
  milestones?: Maybe<MilestoneConnection>;
  /** Name of the namespace. */
  name: Scalars['String'];
  /** Find organizations of this group. */
  organizations?: Maybe<CustomerRelationsOrganizationConnection>;
  /** Package settings for the namespace. */
  packageSettings?: Maybe<PackageSettings>;
  /** Packages of the group. */
  packages?: Maybe<PackageConnection>;
  /** Parent group. */
  parent?: Maybe<Group>;
  /** Path of the namespace. */
  path: Scalars['String'];
  /** Permission level required to create projects in the group. */
  projectCreationLevel?: Maybe<Scalars['String']>;
  /** Projects within this namespace. */
  projects: ProjectConnection;
  /** List of recently visited boards of the group. Maximum size is 4. */
  recentIssueBoards?: Maybe<BoardConnection>;
  /** Indicates if users can request access to namespace. */
  requestAccessEnabled?: Maybe<Scalars['Boolean']>;
  /** Indicates if all users in this group are required to set up two-factor authentication. */
  requireTwoFactorAuthentication?: Maybe<Scalars['Boolean']>;
  /** Aggregated storage statistics of the namespace. Only available for root namespaces. */
  rootStorageStatistics?: Maybe<RootStorageStatistics>;
  /** Find runners visible to the current user. */
  runners?: Maybe<CiRunnerConnection>;
  /** Indicates if sharing a project with another group within this group is prevented. */
  shareWithGroupLock?: Maybe<Scalars['Boolean']>;
  /** Shared runners availability for the namespace and its descendants. */
  sharedRunnersSetting?: Maybe<SharedRunnersSetting>;
  /** Permission level required to create subgroups within the group. */
  subgroupCreationLevel?: Maybe<Scalars['String']>;
  /**
   * Timelog categories for the namespace. Available only when feature flag
   * `timelog_categories` is enabled. This flag is disabled by default, because the
   * feature is experimental and is subject to change without notice.
   */
  timelogCategories?: Maybe<TimeTrackingTimelogCategoryConnection>;
  /** Time logged on issues and merge requests in the group and its subgroups. */
  timelogs: TimelogConnection;
  /** Time before two-factor authentication is enforced. */
  twoFactorGracePeriod?: Maybe<Scalars['Int']>;
  /** Permissions for the current user on the resource */
  userPermissions: GroupPermissions;
  /** Visibility of the namespace. */
  visibility?: Maybe<Scalars['String']>;
  /** Web URL of the group. */
  webUrl: Scalars['String'];
  /**
   * Work item types available to the group. Returns `null` if `work_items` feature
   * flag is disabled. This flag is disabled by default, because the feature is
   * experimental and is subject to change without notice.
   */
  workItemTypes?: Maybe<WorkItemTypeConnection>;
};


export type GroupBoardArgs = {
  id: Scalars['BoardID'];
};


export type GroupBoardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['BoardID']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type GroupCiVariablesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type GroupContactsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['CustomerRelationsContactID']>>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<CustomerRelationsContactState>;
};


export type GroupContainerRepositoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ContainerRepositorySort>;
};


export type GroupCustomEmojiArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type GroupDependencyProxyBlobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type GroupDependencyProxyManifestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type GroupDescendantGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeParentDescendants?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  owned?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
};


export type GroupGroupMembersArgs = {
  accessLevels?: InputMaybe<Array<AccessLevelEnum>>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  relations?: InputMaybe<Array<GroupMemberRelation>>;
  search?: InputMaybe<Scalars['String']>;
};


export type GroupIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeId?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  assigneeUsernames?: InputMaybe<Array<Scalars['String']>>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  closedAfter?: InputMaybe<Scalars['Time']>;
  closedBefore?: InputMaybe<Scalars['Time']>;
  confidential?: InputMaybe<Scalars['Boolean']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  crmContactId?: InputMaybe<Scalars['String']>;
  crmOrganizationId?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  iid?: InputMaybe<Scalars['String']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeSubgroups?: InputMaybe<Scalars['Boolean']>;
  labelName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  milestoneTitle?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  milestoneWildcardId?: InputMaybe<MilestoneWildcardId>;
  myReactionEmoji?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NegatedIssueFilterInput>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<IssueSort>;
  state?: InputMaybe<IssuableState>;
  types?: InputMaybe<Array<IssueType>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


export type GroupLabelArgs = {
  title: Scalars['String'];
};


export type GroupLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeAncestorGroups?: InputMaybe<Scalars['Boolean']>;
  includeDescendantGroups?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  onlyGroupLabels?: InputMaybe<Scalars['Boolean']>;
  searchTerm?: InputMaybe<Scalars['String']>;
};


export type GroupMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeSubgroups?: InputMaybe<Scalars['Boolean']>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


export type GroupMilestonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  containingDate?: InputMaybe<Scalars['Time']>;
  endDate?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  includeAncestors?: InputMaybe<Scalars['Boolean']>;
  includeDescendants?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  searchTitle?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MilestoneSort>;
  startDate?: InputMaybe<Scalars['Time']>;
  state?: InputMaybe<MilestoneStateEnum>;
  timeframe?: InputMaybe<Timeframe>;
  title?: InputMaybe<Scalars['String']>;
};


export type GroupOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['CustomerRelationsOrganizationID']>>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<CustomerRelationsOrganizationState>;
};


export type GroupPackagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeVersionless?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  packageName?: InputMaybe<Scalars['String']>;
  packageType?: InputMaybe<PackageTypeEnum>;
  sort?: InputMaybe<PackageGroupSort>;
  status?: InputMaybe<PackageStatus>;
};


export type GroupProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  includeSubgroups?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<NamespaceProjectSort>;
};


export type GroupRecentIssueBoardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type GroupRunnersArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  membership?: InputMaybe<RunnerMembershipFilter>;
  paused?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<CiRunnerSort>;
  status?: InputMaybe<CiRunnerStatus>;
  tagList?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<CiRunnerType>;
  upgradeStatus?: InputMaybe<CiRunnerUpgradeStatus>;
};


export type GroupTimelogCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type GroupTimelogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Time']>;
  endTime?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['GroupID']>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  startDate?: InputMaybe<Scalars['Time']>;
  startTime?: InputMaybe<Scalars['Time']>;
  username?: InputMaybe<Scalars['String']>;
};


export type GroupWorkItemTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  taskable?: InputMaybe<Scalars['Boolean']>;
};

/** The connection type for Group. */
export type GroupConnection = {
  __typename?: 'GroupConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GroupEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Group>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GroupEdge = {
  __typename?: 'GroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Group>;
};

/** Represents a Group Membership */
export type GroupMember = MemberInterface & {
  __typename?: 'GroupMember';
  /** GitLab::Access level. */
  accessLevel?: Maybe<AccessLevel>;
  /** Date and time the membership was created. */
  createdAt?: Maybe<Scalars['Time']>;
  /** User that authorized membership. */
  createdBy?: Maybe<UserCore>;
  /** Date and time the membership expires. */
  expiresAt?: Maybe<Scalars['Time']>;
  /** Group that a User is a member of. */
  group?: Maybe<Group>;
  /** ID of the member. */
  id: Scalars['ID'];
  /** Find a merge request. */
  mergeRequestInteraction?: Maybe<UserMergeRequestInteraction>;
  /** Group notification email for User. Only available for admins. */
  notificationEmail?: Maybe<Scalars['String']>;
  /** Date and time the membership was last updated. */
  updatedAt?: Maybe<Scalars['Time']>;
  /** User that is associated with the member object. */
  user?: Maybe<UserCore>;
  /** Permissions for the current user on the resource */
  userPermissions: GroupPermissions;
};


/** Represents a Group Membership */
export type GroupMemberMergeRequestInteractionArgs = {
  id: Scalars['MergeRequestID'];
};

/** The connection type for GroupMember. */
export type GroupMemberConnection = {
  __typename?: 'GroupMemberConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GroupMemberEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<GroupMember>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GroupMemberEdge = {
  __typename?: 'GroupMemberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<GroupMember>;
};

/** Group member relation */
export type GroupMemberRelation =
  /** Members in the group's subgroups. */
  | 'DESCENDANTS'
  /** Members in the group itself. */
  | 'DIRECT'
  /** Members in the group's ancestor groups. */
  | 'INHERITED'
  /** Invited group's members. */
  | 'SHARED_FROM_GROUPS';

/** User permission on groups */
export type GroupPermission =
  /** Groups where the user can create projects. */
  | 'CREATE_PROJECTS'
  /** Groups where the user can transfer projects to. */
  | 'TRANSFER_PROJECTS';

export type GroupPermissions = {
  __typename?: 'GroupPermissions';
  /** Indicates the user can perform `create_projects` on this resource */
  createProjects: Scalars['Boolean'];
  /** Indicates the user can perform `read_group` on this resource */
  readGroup: Scalars['Boolean'];
};

/** Autogenerated input type of GroupUpdate */
export type GroupUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Full path of the group that will be updated. */
  fullPath: Scalars['ID'];
  /** Shared runners availability for the namespace and its descendants. */
  sharedRunnersSetting: SharedRunnersSetting;
};

/** Autogenerated return type of GroupUpdate */
export type GroupUpdatePayload = {
  __typename?: 'GroupUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Group after update. */
  group?: Maybe<Group>;
};

/** Helm file metadata */
export type HelmFileMetadata = PackageFileMetadata & {
  __typename?: 'HelmFileMetadata';
  /** Channel of the Helm chart. */
  channel: Scalars['String'];
  /** Date of creation. */
  createdAt: Scalars['Time'];
  /** Metadata of the Helm chart. */
  metadata: PackageHelmMetadataType;
  /** Date of most recent update. */
  updatedAt: Scalars['Time'];
};

/** Autogenerated input type of HttpIntegrationCreate */
export type HttpIntegrationCreateInput = {
  /** Whether the integration is receiving alerts. */
  active: Scalars['Boolean'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Name of the integration. */
  name: Scalars['String'];
  /** Project to create the integration in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of HttpIntegrationCreate */
export type HttpIntegrationCreatePayload = {
  __typename?: 'HttpIntegrationCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** HTTP integration. */
  integration?: Maybe<AlertManagementHttpIntegration>;
};

/** Autogenerated input type of HttpIntegrationDestroy */
export type HttpIntegrationDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the integration to remove. */
  id: Scalars['AlertManagementHttpIntegrationID'];
};

/** Autogenerated return type of HttpIntegrationDestroy */
export type HttpIntegrationDestroyPayload = {
  __typename?: 'HttpIntegrationDestroyPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** HTTP integration. */
  integration?: Maybe<AlertManagementHttpIntegration>;
};

/** Autogenerated input type of HttpIntegrationResetToken */
export type HttpIntegrationResetTokenInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the integration to mutate. */
  id: Scalars['AlertManagementHttpIntegrationID'];
};

/** Autogenerated return type of HttpIntegrationResetToken */
export type HttpIntegrationResetTokenPayload = {
  __typename?: 'HttpIntegrationResetTokenPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** HTTP integration. */
  integration?: Maybe<AlertManagementHttpIntegration>;
};

/** Autogenerated input type of HttpIntegrationUpdate */
export type HttpIntegrationUpdateInput = {
  /** Whether the integration is receiving alerts. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the integration to mutate. */
  id: Scalars['AlertManagementHttpIntegrationID'];
  /** Name of the integration. */
  name?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of HttpIntegrationUpdate */
export type HttpIntegrationUpdatePayload = {
  __typename?: 'HttpIntegrationUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** HTTP integration. */
  integration?: Maybe<AlertManagementHttpIntegration>;
};

/** Represents an issuable. */
export type Issuable = Issue | MergeRequest | WorkItem;

/** Incident severity */
export type IssuableSeverity =
  /** Critical severity */
  | 'CRITICAL'
  /** High severity */
  | 'HIGH'
  /** Low severity */
  | 'LOW'
  /** Medium severity */
  | 'MEDIUM'
  /** Unknown severity */
  | 'UNKNOWN';

/** State of a GitLab issue or merge request */
export type IssuableState =
  /** All available. */
  | 'all'
  /** In closed state. */
  | 'closed'
  /** Discussion has been locked. */
  | 'locked'
  /** In open state. */
  | 'opened';

export type Issue = CurrentUserTodos & NoteableInterface & Todoable & {
  __typename?: 'Issue';
  /** Alert associated to this issue. */
  alertManagementAlert?: Maybe<AlertManagementAlert>;
  /** Assignees of the issue. */
  assignees?: Maybe<UserCoreConnection>;
  /** User that created the issue. */
  author: UserCore;
  /** Issue this issue was closed as a duplicate of. */
  closedAsDuplicateOf?: Maybe<Issue>;
  /** Timestamp of when the issue was closed. */
  closedAt?: Maybe<Scalars['Time']>;
  /** Indicates the issue is confidential. */
  confidential: Scalars['Boolean'];
  /** User specific email address for the issue. */
  createNoteEmail?: Maybe<Scalars['String']>;
  /** Timestamp of when the issue was created. */
  createdAt: Scalars['Time'];
  /** To-do items for the current user. */
  currentUserTodos: TodoConnection;
  /** Customer relations contacts of the issue. */
  customerRelationsContacts?: Maybe<CustomerRelationsContactConnection>;
  /** Description of the issue. */
  description?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `description` */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** Collection of design images associated with this issue. */
  designCollection?: Maybe<DesignCollection>;
  /** Indicates discussion is locked on the issue. */
  discussionLocked: Scalars['Boolean'];
  /** All discussions on this noteable. */
  discussions: DiscussionConnection;
  /** Number of downvotes the issue has received. */
  downvotes: Scalars['Int'];
  /** Due date of the issue. */
  dueDate?: Maybe<Scalars['Time']>;
  /** Indicates if a project has email notifications disabled: `true` if email notifications are disabled. */
  emailsDisabled: Scalars['Boolean'];
  /** Escalation status of the issue. */
  escalationStatus?: Maybe<IssueEscalationStatus>;
  /**
   * Indicates the issue is hidden because the author has been banned. Will always
   * return `null` if `ban_user_feature_flag` feature flag is disabled.
   */
  hidden?: Maybe<Scalars['Boolean']>;
  /** Human-readable time estimate of the issue. */
  humanTimeEstimate?: Maybe<Scalars['String']>;
  /** Human-readable total time reported as spent on the issue. */
  humanTotalTimeSpent?: Maybe<Scalars['String']>;
  /** ID of the issue. */
  id: Scalars['ID'];
  /** Internal ID of the issue. */
  iid: Scalars['ID'];
  /** Labels of the issue. */
  labels?: Maybe<LabelConnection>;
  /** Number of merge requests that close the issue on merge. */
  mergeRequestsCount: Scalars['Int'];
  /** Milestone of the issue. */
  milestone?: Maybe<Milestone>;
  /** Indicates if issue got moved from other project. */
  moved?: Maybe<Scalars['Boolean']>;
  /** Updated Issue after it got moved to another project. */
  movedTo?: Maybe<Issue>;
  /** All notes on this noteable. */
  notes: NoteConnection;
  /** List of participants in the issue. */
  participants?: Maybe<UserCoreConnection>;
  /** ID of the issue project. */
  projectId: Scalars['Int'];
  /** Internal reference of the issue. Returned in shortened format by default. */
  reference: Scalars['String'];
  /** Relative position of the issue (used for positioning in epic tree and issue boards). */
  relativePosition?: Maybe<Scalars['Int']>;
  /** Severity level of the incident. */
  severity?: Maybe<IssuableSeverity>;
  /** State of the issue. */
  state: IssueState;
  /** Indicates the currently logged in user is subscribed to the issue. */
  subscribed: Scalars['Boolean'];
  /** Task completion status of the issue. */
  taskCompletionStatus: TaskCompletionStatus;
  /** Time estimate of the issue. */
  timeEstimate: Scalars['Int'];
  /** Timelogs on the issue. */
  timelogs: TimelogConnection;
  /** Title of the issue. */
  title: Scalars['String'];
  /** The GitLab Flavored Markdown rendering of `title` */
  titleHtml?: Maybe<Scalars['String']>;
  /** Total time reported as spent on the issue. */
  totalTimeSpent: Scalars['Int'];
  /** Type of the issue. */
  type?: Maybe<IssueType>;
  /** Timestamp of when the issue was last updated. */
  updatedAt: Scalars['Time'];
  /** User that last updated the issue. */
  updatedBy?: Maybe<UserCore>;
  /** Number of upvotes the issue has received. */
  upvotes: Scalars['Int'];
  /** Number of user discussions in the issue. */
  userDiscussionsCount: Scalars['Int'];
  /** Number of user notes of the issue. */
  userNotesCount: Scalars['Int'];
  /** Permissions for the current user on the resource */
  userPermissions: IssuePermissions;
  /** Web path of the issue. */
  webPath: Scalars['String'];
  /** Web URL of the issue. */
  webUrl: Scalars['String'];
};


export type IssueAssigneesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type IssueCurrentUserTodosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<TodoStateEnum>;
};


export type IssueCustomerRelationsContactsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type IssueDiscussionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type IssueLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type IssueNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type IssueParticipantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type IssueReferenceArgs = {
  full?: InputMaybe<Scalars['Boolean']>;
};


export type IssueTimelogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Issue. */
export type IssueConnection = {
  __typename?: 'IssueConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<IssueEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Issue>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type IssueEdge = {
  __typename?: 'IssueEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Issue>;
};

/** Issue escalation status values */
export type IssueEscalationStatus =
  /** Someone is actively investigating the problem. */
  | 'ACKNOWLEDGED'
  /** No action will be taken. */
  | 'IGNORED'
  /** The problem has been addressed. */
  | 'RESOLVED'
  /** Investigation has not started. */
  | 'TRIGGERED';

/** Autogenerated input type of IssueMove */
export type IssueMoveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the issue to mutate. */
  iid: Scalars['String'];
  /** Project the issue to mutate is in. */
  projectPath: Scalars['ID'];
  /** Project to move the issue to. */
  targetProjectPath: Scalars['ID'];
};

/** Autogenerated input type of IssueMoveList */
export type IssueMoveListInput = {
  /** Global ID of the board that the issue is in. */
  boardId: Scalars['BoardID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the board list that the issue will be moved from. */
  fromListId?: InputMaybe<Scalars['ID']>;
  /** IID of the issue to mutate. */
  iid: Scalars['String'];
  /** ID of issue that should be placed after the current issue. */
  moveAfterId?: InputMaybe<Scalars['ID']>;
  /** ID of issue that should be placed before the current issue. */
  moveBeforeId?: InputMaybe<Scalars['ID']>;
  /** Project the issue to mutate is in. */
  projectPath: Scalars['ID'];
  /** ID of the board list that the issue will be moved to. */
  toListId?: InputMaybe<Scalars['ID']>;
};

/** Autogenerated return type of IssueMoveList */
export type IssueMoveListPayload = {
  __typename?: 'IssueMoveListPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue after mutation. */
  issue?: Maybe<Issue>;
};

/** Autogenerated return type of IssueMove */
export type IssueMovePayload = {
  __typename?: 'IssueMovePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue after mutation. */
  issue?: Maybe<Issue>;
};

/** Check permissions for the current user on a issue */
export type IssuePermissions = {
  __typename?: 'IssuePermissions';
  /** Indicates the user can perform `admin_issue` on this resource */
  adminIssue: Scalars['Boolean'];
  /** Indicates the user can perform `create_design` on this resource */
  createDesign: Scalars['Boolean'];
  /** Indicates the user can perform `create_note` on this resource */
  createNote: Scalars['Boolean'];
  /** Indicates the user can perform `destroy_design` on this resource */
  destroyDesign: Scalars['Boolean'];
  /** Indicates the user can perform `read_design` on this resource */
  readDesign: Scalars['Boolean'];
  /** Indicates the user can perform `read_issue` on this resource */
  readIssue: Scalars['Boolean'];
  /** Indicates the user can perform `reopen_issue` on this resource */
  reopenIssue: Scalars['Boolean'];
  /** Indicates the user can perform `update_issue` on this resource */
  updateIssue: Scalars['Boolean'];
};

/** Autogenerated input type of IssueSetAssignees */
export type IssueSetAssigneesInput = {
  /** Usernames to assign to the resource. Replaces existing assignees by default. */
  assigneeUsernames: Array<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the issue to mutate. */
  iid: Scalars['String'];
  /** Operation to perform. Defaults to REPLACE. */
  operationMode?: InputMaybe<MutationOperationMode>;
  /** Project the issue to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of IssueSetAssignees */
export type IssueSetAssigneesPayload = {
  __typename?: 'IssueSetAssigneesPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue after mutation. */
  issue?: Maybe<Issue>;
};

/** Autogenerated input type of IssueSetConfidential */
export type IssueSetConfidentialInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether or not to set the issue as a confidential. */
  confidential: Scalars['Boolean'];
  /** IID of the issue to mutate. */
  iid: Scalars['String'];
  /** Project the issue to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of IssueSetConfidential */
export type IssueSetConfidentialPayload = {
  __typename?: 'IssueSetConfidentialPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue after mutation. */
  issue?: Maybe<Issue>;
};

/** Autogenerated input type of IssueSetCrmContacts */
export type IssueSetCrmContactsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Customer relations contact IDs to set. Replaces existing contacts by default. */
  contactIds: Array<Scalars['CustomerRelationsContactID']>;
  /** IID of the issue to mutate. */
  iid: Scalars['String'];
  /** Changes the operation mode. Defaults to REPLACE. */
  operationMode?: InputMaybe<MutationOperationMode>;
  /** Project the issue to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of IssueSetCrmContacts */
export type IssueSetCrmContactsPayload = {
  __typename?: 'IssueSetCrmContactsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue after mutation. */
  issue?: Maybe<Issue>;
};

/** Autogenerated input type of IssueSetDueDate */
export type IssueSetDueDateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Desired due date for the issue. Due date is removed if null. */
  dueDate?: InputMaybe<Scalars['Time']>;
  /** IID of the issue to mutate. */
  iid: Scalars['String'];
  /** Project the issue to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of IssueSetDueDate */
export type IssueSetDueDatePayload = {
  __typename?: 'IssueSetDueDatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue after mutation. */
  issue?: Maybe<Issue>;
};

/** Autogenerated input type of IssueSetEscalationStatus */
export type IssueSetEscalationStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the issue to mutate. */
  iid: Scalars['String'];
  /** Project the issue to mutate is in. */
  projectPath: Scalars['ID'];
  /** Set the escalation status. */
  status: IssueEscalationStatus;
};

/** Autogenerated return type of IssueSetEscalationStatus */
export type IssueSetEscalationStatusPayload = {
  __typename?: 'IssueSetEscalationStatusPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue after mutation. */
  issue?: Maybe<Issue>;
};

/** Autogenerated input type of IssueSetLocked */
export type IssueSetLockedInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the issue to mutate. */
  iid: Scalars['String'];
  /** Whether or not to lock discussion on the issue. */
  locked: Scalars['Boolean'];
  /** Project the issue to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of IssueSetLocked */
export type IssueSetLockedPayload = {
  __typename?: 'IssueSetLockedPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue after mutation. */
  issue?: Maybe<Issue>;
};

/** Autogenerated input type of IssueSetSeverity */
export type IssueSetSeverityInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the issue to mutate. */
  iid: Scalars['String'];
  /** Project the issue to mutate is in. */
  projectPath: Scalars['ID'];
  /** Set the incident severity level. */
  severity: IssuableSeverity;
};

/** Autogenerated return type of IssueSetSeverity */
export type IssueSetSeverityPayload = {
  __typename?: 'IssueSetSeverityPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue after mutation. */
  issue?: Maybe<Issue>;
};

/** Autogenerated input type of IssueSetSubscription */
export type IssueSetSubscriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the issue to mutate. */
  iid: Scalars['String'];
  /** Project the issue to mutate is in. */
  projectPath: Scalars['ID'];
  /** Desired state of the subscription. */
  subscribedState: Scalars['Boolean'];
};

/** Autogenerated return type of IssueSetSubscription */
export type IssueSetSubscriptionPayload = {
  __typename?: 'IssueSetSubscriptionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue after mutation. */
  issue?: Maybe<Issue>;
};

/** Values for sorting issues */
export type IssueSort =
  /** Closed time by ascending order. */
  | 'CLOSED_AT_ASC'
  /** Closed time by descending order. */
  | 'CLOSED_AT_DESC'
  /** Created at ascending order. */
  | 'CREATED_ASC'
  /** Created at descending order. */
  | 'CREATED_DESC'
  /** Due date by ascending order. */
  | 'DUE_DATE_ASC'
  /** Due date by descending order. */
  | 'DUE_DATE_DESC'
  /** Status from triggered to resolved. */
  | 'ESCALATION_STATUS_ASC'
  /** Status from resolved to triggered. */
  | 'ESCALATION_STATUS_DESC'
  /** Label priority by ascending order. */
  | 'LABEL_PRIORITY_ASC'
  /** Label priority by descending order. */
  | 'LABEL_PRIORITY_DESC'
  /** Milestone due date by ascending order. */
  | 'MILESTONE_DUE_ASC'
  /** Milestone due date by descending order. */
  | 'MILESTONE_DUE_DESC'
  /** Number of upvotes (awarded "thumbs up" emoji) by ascending order. */
  | 'POPULARITY_ASC'
  /** Number of upvotes (awarded "thumbs up" emoji) by descending order. */
  | 'POPULARITY_DESC'
  /** Priority by ascending order. */
  | 'PRIORITY_ASC'
  /** Priority by descending order. */
  | 'PRIORITY_DESC'
  /** Relative position by ascending order. */
  | 'RELATIVE_POSITION_ASC'
  /** Severity from less critical to more critical. */
  | 'SEVERITY_ASC'
  /** Severity from more critical to less critical. */
  | 'SEVERITY_DESC'
  /** Title by ascending order. */
  | 'TITLE_ASC'
  /** Title by descending order. */
  | 'TITLE_DESC'
  /** Updated at ascending order. */
  | 'UPDATED_ASC'
  /** Updated at descending order. */
  | 'UPDATED_DESC'
  /** Created at ascending order. */
  | 'created_asc'
  /** Created at descending order. */
  | 'created_desc'
  /** Updated at ascending order. */
  | 'updated_asc'
  /** Updated at descending order. */
  | 'updated_desc';

/** State of a GitLab issue */
export type IssueState =
  /** All available. */
  | 'all'
  /** In closed state. */
  | 'closed'
  /** Discussion has been locked. */
  | 'locked'
  /** In open state. */
  | 'opened';

/** Values for issue state events */
export type IssueStateEvent =
  /** Closes the issue. */
  | 'CLOSE'
  /** Reopens the issue. */
  | 'REOPEN';

/** Represents total number of issues for the represented statuses */
export type IssueStatusCountsType = {
  __typename?: 'IssueStatusCountsType';
  /** Number of issues with status ALL for the project */
  all?: Maybe<Scalars['Int']>;
  /** Number of issues with status CLOSED for the project */
  closed?: Maybe<Scalars['Int']>;
  /** Number of issues with status OPENED for the project */
  opened?: Maybe<Scalars['Int']>;
};

/** Issue type */
export type IssueType =
  /** Incident issue type */
  | 'INCIDENT'
  /** Issue issue type */
  | 'ISSUE'
  /** Requirement issue type */
  | 'REQUIREMENT'
  /**
   * Task issue type. Available only when feature flag `work_items` is enabled.
   * Introduced in 15.2: This feature is in Alpha. It can be changed or removed at any time.
   */
  | 'TASK'
  /** Test Case issue type */
  | 'TEST_CASE';

export type JiraImport = {
  __typename?: 'JiraImport';
  /** Timestamp of when the Jira import was created. */
  createdAt?: Maybe<Scalars['Time']>;
  /** Count of issues that failed to import. */
  failedToImportCount: Scalars['Int'];
  /** Count of issues that were successfully imported. */
  importedIssuesCount: Scalars['Int'];
  /** Project key for the imported Jira project. */
  jiraProjectKey: Scalars['String'];
  /** Timestamp of when the Jira import was scheduled. */
  scheduledAt?: Maybe<Scalars['Time']>;
  /** User that started the Jira import. */
  scheduledBy?: Maybe<UserCore>;
  /** Total count of issues that were attempted to import. */
  totalIssueCount: Scalars['Int'];
};

/** The connection type for JiraImport. */
export type JiraImportConnection = {
  __typename?: 'JiraImportConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<JiraImportEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<JiraImport>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type JiraImportEdge = {
  __typename?: 'JiraImportEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<JiraImport>;
};

/** Autogenerated input type of JiraImportStart */
export type JiraImportStartInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Project key of the importer Jira project. */
  jiraProjectKey: Scalars['String'];
  /** Project name of the importer Jira project. */
  jiraProjectName?: InputMaybe<Scalars['String']>;
  /** Project to import the Jira project into. */
  projectPath: Scalars['ID'];
  /** Mapping of Jira to GitLab users. */
  usersMapping?: InputMaybe<Array<JiraUsersMappingInputType>>;
};

/** Autogenerated return type of JiraImportStart */
export type JiraImportStartPayload = {
  __typename?: 'JiraImportStartPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Jira import data after mutation. */
  jiraImport?: Maybe<JiraImport>;
};

/** Autogenerated input type of JiraImportUsers */
export type JiraImportUsersInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Project to import the Jira users into. */
  projectPath: Scalars['ID'];
  /** Index of the record the import should started at, default 0 (50 records returned). */
  startAt?: InputMaybe<Scalars['Int']>;
};

/** Autogenerated return type of JiraImportUsers */
export type JiraImportUsersPayload = {
  __typename?: 'JiraImportUsersPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Users returned from Jira, matched by email and name if possible. */
  jiraUsers?: Maybe<Array<JiraUser>>;
};

export type JiraProject = {
  __typename?: 'JiraProject';
  /** Key of the Jira project. */
  key: Scalars['String'];
  /** Name of the Jira project. */
  name?: Maybe<Scalars['String']>;
  /** ID of the Jira project. */
  projectId: Scalars['Int'];
};

/** The connection type for JiraProject. */
export type JiraProjectConnection = {
  __typename?: 'JiraProjectConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<JiraProjectEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<JiraProject>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type JiraProjectEdge = {
  __typename?: 'JiraProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<JiraProject>;
};

export type JiraService = Service & {
  __typename?: 'JiraService';
  /** Indicates if the service is active. */
  active?: Maybe<Scalars['Boolean']>;
  /** List of all Jira projects fetched through Jira REST API. */
  projects?: Maybe<JiraProjectConnection>;
  /** Type of the service. */
  serviceType?: Maybe<ServiceType>;
  /** Class name of the service. */
  type?: Maybe<Scalars['String']>;
};


export type JiraServiceProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type JiraUser = {
  __typename?: 'JiraUser';
  /** ID of the matched GitLab user. */
  gitlabId?: Maybe<Scalars['Int']>;
  /** Name of the matched GitLab user. */
  gitlabName?: Maybe<Scalars['String']>;
  /** Username of the matched GitLab user. */
  gitlabUsername?: Maybe<Scalars['String']>;
  /** Account ID of the Jira user. */
  jiraAccountId: Scalars['String'];
  /** Display name of the Jira user. */
  jiraDisplayName: Scalars['String'];
  /** Email of the Jira user, returned only for users with public emails. */
  jiraEmail?: Maybe<Scalars['String']>;
};

export type JiraUsersMappingInputType = {
  /** ID of the GitLab user. */
  gitlabId?: InputMaybe<Scalars['Int']>;
  /** Jira account ID of the user. */
  jiraAccountId: Scalars['String'];
};

export type JobArtifactFileType =
  /** ACCESSIBILITY job artifact file type. */
  | 'ACCESSIBILITY'
  /** API FUZZING job artifact file type. */
  | 'API_FUZZING'
  /** ARCHIVE job artifact file type. */
  | 'ARCHIVE'
  /** BROWSER PERFORMANCE job artifact file type. */
  | 'BROWSER_PERFORMANCE'
  /** CLUSTER APPLICATIONS job artifact file type. */
  | 'CLUSTER_APPLICATIONS'
  /** CLUSTER IMAGE SCANNING job artifact file type. */
  | 'CLUSTER_IMAGE_SCANNING'
  /** COBERTURA job artifact file type. */
  | 'COBERTURA'
  /** CODE QUALITY job artifact file type. */
  | 'CODEQUALITY'
  /** CONTAINER SCANNING job artifact file type. */
  | 'CONTAINER_SCANNING'
  /** COVERAGE FUZZING job artifact file type. */
  | 'COVERAGE_FUZZING'
  /** CYCLONEDX job artifact file type. */
  | 'CYCLONEDX'
  /** DAST job artifact file type. */
  | 'DAST'
  /** DEPENDENCY SCANNING job artifact file type. */
  | 'DEPENDENCY_SCANNING'
  /** DOTENV job artifact file type. */
  | 'DOTENV'
  /** JUNIT job artifact file type. */
  | 'JUNIT'
  /** LICENSE SCANNING job artifact file type. */
  | 'LICENSE_SCANNING'
  /** LOAD PERFORMANCE job artifact file type. */
  | 'LOAD_PERFORMANCE'
  /** LSIF job artifact file type. */
  | 'LSIF'
  /** METADATA job artifact file type. */
  | 'METADATA'
  /** METRICS job artifact file type. */
  | 'METRICS'
  /** METRICS REFEREE job artifact file type. */
  | 'METRICS_REFEREE'
  /** NETWORK REFEREE job artifact file type. */
  | 'NETWORK_REFEREE'
  /** PERFORMANCE job artifact file type. */
  | 'PERFORMANCE'
  /** REQUIREMENTS job artifact file type. */
  | 'REQUIREMENTS'
  /** SAST job artifact file type. */
  | 'SAST'
  /** SECRET DETECTION job artifact file type. */
  | 'SECRET_DETECTION'
  /** TERRAFORM job artifact file type. */
  | 'TERRAFORM'
  /** TRACE job artifact file type. */
  | 'TRACE';

/** Autogenerated input type of JobCancel */
export type JobCancelInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the job to mutate. */
  id: Scalars['CiBuildID'];
};

/** Autogenerated return type of JobCancel */
export type JobCancelPayload = {
  __typename?: 'JobCancelPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Job after the mutation. */
  job?: Maybe<CiJob>;
};

export type JobNeedUnion = CiBuildNeed | CiJob;

/** The connection type for JobNeedUnion. */
export type JobNeedUnionConnection = {
  __typename?: 'JobNeedUnionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<JobNeedUnionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<JobNeedUnion>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type JobNeedUnionEdge = {
  __typename?: 'JobNeedUnionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<JobNeedUnion>;
};

export type JobPermissions = {
  __typename?: 'JobPermissions';
  /** Indicates the user can perform `read_build` on this resource */
  readBuild: Scalars['Boolean'];
  /** Indicates the user can perform `read_job_artifacts` on this resource */
  readJobArtifacts: Scalars['Boolean'];
  /** Indicates the user can perform `update_build` on this resource */
  updateBuild: Scalars['Boolean'];
};

/** Autogenerated input type of JobPlay */
export type JobPlayInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the job to mutate. */
  id: Scalars['CiBuildID'];
};

/** Autogenerated return type of JobPlay */
export type JobPlayPayload = {
  __typename?: 'JobPlayPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Job after the mutation. */
  job?: Maybe<CiJob>;
};

/** Autogenerated input type of JobRetry */
export type JobRetryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the job to mutate. */
  id: Scalars['CiBuildID'];
  /** Variables to use when retrying a manual job. */
  variables?: InputMaybe<Array<CiVariableInput>>;
};

/** Autogenerated return type of JobRetry */
export type JobRetryPayload = {
  __typename?: 'JobRetryPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Job after the mutation. */
  job?: Maybe<CiJob>;
};

/** Autogenerated input type of JobUnschedule */
export type JobUnscheduleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the job to mutate. */
  id: Scalars['CiBuildID'];
};

/** Autogenerated return type of JobUnschedule */
export type JobUnschedulePayload = {
  __typename?: 'JobUnschedulePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Job after the mutation. */
  job?: Maybe<CiJob>;
};

export type Kas = {
  __typename?: 'Kas';
  /** Indicates whether the Kubernetes Agent Server is enabled. */
  enabled: Scalars['Boolean'];
  /** URL used by the Agents to communicate with KAS. */
  externalUrl?: Maybe<Scalars['String']>;
  /** KAS version. */
  version?: Maybe<Scalars['String']>;
};

export type Label = {
  __typename?: 'Label';
  /** Background color of the label. */
  color: Scalars['String'];
  /** When this label was created. */
  createdAt: Scalars['Time'];
  /** Description of the label (Markdown rendered as HTML for caching). */
  description?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `description` */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** Label ID. */
  id: Scalars['ID'];
  /** Text color of the label. */
  textColor: Scalars['String'];
  /** Content of the label. */
  title: Scalars['String'];
  /** When this label was last updated. */
  updatedAt: Scalars['Time'];
};

/** The connection type for Label. */
export type LabelConnection = {
  __typename?: 'LabelConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LabelEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Label>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of LabelCreate */
export type LabelCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /**
   * The color of the label given in 6-digit hex notation with leading '#' sign
   * (for example, `#FFAABB`) or one of the CSS color names.
   */
  color?: InputMaybe<Scalars['String']>;
  /** Description of the label. */
  description?: InputMaybe<Scalars['String']>;
  /** Full path of the group with which the resource is associated. */
  groupPath?: InputMaybe<Scalars['ID']>;
  /** Full path of the project with which the resource is associated. */
  projectPath?: InputMaybe<Scalars['ID']>;
  /** Title of the label. */
  title: Scalars['String'];
};

/** Autogenerated return type of LabelCreate */
export type LabelCreatePayload = {
  __typename?: 'LabelCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Label after mutation. */
  label?: Maybe<Label>;
};

/** An edge in a connection. */
export type LabelEdge = {
  __typename?: 'LabelEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Label>;
};

/** Autogenerated input type of MarkAsSpamSnippet */
export type MarkAsSpamSnippetInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the snippet to update. */
  id: Scalars['SnippetID'];
};

/** Autogenerated return type of MarkAsSpamSnippet */
export type MarkAsSpamSnippetPayload = {
  __typename?: 'MarkAsSpamSnippetPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Snippet after mutation. */
  snippet?: Maybe<Snippet>;
};

/** Maven metadata */
export type MavenMetadata = {
  __typename?: 'MavenMetadata';
  /** App group of the Maven package. */
  appGroup: Scalars['String'];
  /** App name of the Maven package. */
  appName: Scalars['String'];
  /** App version of the Maven package. */
  appVersion?: Maybe<Scalars['String']>;
  /** Date of creation. */
  createdAt: Scalars['Time'];
  /** ID of the metadatum. */
  id: Scalars['PackagesMavenMetadatumID'];
  /** Path of the Maven package. */
  path: Scalars['String'];
  /** Date of most recent update. */
  updatedAt: Scalars['Time'];
};

/** Possible identifier types for a measurement */
export type MeasurementIdentifier =
  /** Group count. */
  | 'GROUPS'
  /** Issue count. */
  | 'ISSUES'
  /** Merge request count. */
  | 'MERGE_REQUESTS'
  /** Pipeline count. */
  | 'PIPELINES'
  /** Pipeline count with canceled status. */
  | 'PIPELINES_CANCELED'
  /** Pipeline count with failed status. */
  | 'PIPELINES_FAILED'
  /** Pipeline count with skipped status. */
  | 'PIPELINES_SKIPPED'
  /** Pipeline count with success status. */
  | 'PIPELINES_SUCCEEDED'
  /** Project count. */
  | 'PROJECTS'
  /** User count. */
  | 'USERS';

export type MemberInterface = {
  /** GitLab::Access level. */
  accessLevel?: Maybe<AccessLevel>;
  /** Date and time the membership was created. */
  createdAt?: Maybe<Scalars['Time']>;
  /** User that authorized membership. */
  createdBy?: Maybe<UserCore>;
  /** Date and time the membership expires. */
  expiresAt?: Maybe<Scalars['Time']>;
  /** ID of the member. */
  id: Scalars['ID'];
  /** Find a merge request. */
  mergeRequestInteraction?: Maybe<UserMergeRequestInteraction>;
  /** Date and time the membership was last updated. */
  updatedAt?: Maybe<Scalars['Time']>;
  /** User that is associated with the member object. */
  user?: Maybe<UserCore>;
};


export type MemberInterfaceMergeRequestInteractionArgs = {
  id: Scalars['MergeRequestID'];
};

/** The connection type for MemberInterface. */
export type MemberInterfaceConnection = {
  __typename?: 'MemberInterfaceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MemberInterfaceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MemberInterface>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MemberInterfaceEdge = {
  __typename?: 'MemberInterfaceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<MemberInterface>;
};

export type MergeRequest = CurrentUserTodos & NoteableInterface & Todoable & {
  __typename?: 'MergeRequest';
  /** Indicates if members of the target project can push to the fork. */
  allowCollaboration?: Maybe<Scalars['Boolean']>;
  /** Users who approved the merge request. */
  approvedBy?: Maybe<UserCoreConnection>;
  /** Assignees of the merge request. */
  assignees?: Maybe<MergeRequestAssigneeConnection>;
  /** User who created this merge request. */
  author?: Maybe<MergeRequestAuthor>;
  /** Indicates if auto merge is enabled for the merge request. */
  autoMergeEnabled: Scalars['Boolean'];
  /** Selected auto merge strategy. */
  autoMergeStrategy?: Maybe<Scalars['String']>;
  /** Array of available auto merge strategies. */
  availableAutoMergeStrategies?: Maybe<Array<Scalars['String']>>;
  /** Number of commits in the merge request. */
  commitCount?: Maybe<Scalars['Int']>;
  /** Merge request commits. */
  commits?: Maybe<CommitConnection>;
  /** Merge request commits excluding merge commits. */
  commitsWithoutMergeCommits?: Maybe<CommitConnection>;
  /** Users who have added commits to the merge request. */
  committers?: Maybe<UserCoreConnection>;
  /** Indicates if the merge request has conflicts. */
  conflicts: Scalars['Boolean'];
  /** Timestamp of when the merge request was created. */
  createdAt: Scalars['Time'];
  /** To-do items for the current user. */
  currentUserTodos: TodoConnection;
  /** Default merge commit message of the merge request. */
  defaultMergeCommitMessage?: Maybe<Scalars['String']>;
  /** Default squash commit message of the merge request. */
  defaultSquashCommitMessage?: Maybe<Scalars['String']>;
  /** Description of the merge request (Markdown rendered as HTML for caching). */
  description?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `description` */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** Diff head SHA of the merge request. */
  diffHeadSha?: Maybe<Scalars['String']>;
  /** References of the base SHA, the head SHA, and the start SHA for this merge request. */
  diffRefs?: Maybe<DiffRefs>;
  /** Details about which files were changed in this merge request. */
  diffStats?: Maybe<Array<DiffStats>>;
  /** Summary of which files were changed in this merge request. */
  diffStatsSummary?: Maybe<DiffStatsSummary>;
  /** Indicates if comments on the merge request are locked to members only. */
  discussionLocked: Scalars['Boolean'];
  /** All discussions on this noteable. */
  discussions: DiscussionConnection;
  /** Indicates if the source branch is behind the target branch. */
  divergedFromTargetBranch: Scalars['Boolean'];
  /** Number of downvotes for the merge request. */
  downvotes: Scalars['Int'];
  /** Indicates if the merge request is a draft. */
  draft: Scalars['Boolean'];
  /** Indicates if the project settings will lead to source branch deletion after merge. */
  forceRemoveSourceBranch?: Maybe<Scalars['Boolean']>;
  /** Indicates if the merge request has CI. */
  hasCi: Scalars['Boolean'];
  /** Pipeline running on the branch HEAD of the merge request. */
  headPipeline?: Maybe<Pipeline>;
  /** Human-readable time estimate of the merge request. */
  humanTimeEstimate?: Maybe<Scalars['String']>;
  /** Human-readable total time reported as spent on the merge request. */
  humanTotalTimeSpent?: Maybe<Scalars['String']>;
  /** ID of the merge request. */
  id: Scalars['ID'];
  /** Internal ID of the merge request. */
  iid: Scalars['String'];
  /** Commit SHA of the merge request if merge is in progress. */
  inProgressMergeCommitSha?: Maybe<Scalars['String']>;
  /** Labels of the merge request. */
  labels?: Maybe<LabelConnection>;
  /** SHA of the merge request commit (set once merged). */
  mergeCommitSha?: Maybe<Scalars['String']>;
  /** Error message due to a merge error. */
  mergeError?: Maybe<Scalars['String']>;
  /** Indicates if a merge is currently occurring. */
  mergeOngoing: Scalars['Boolean'];
  /**
   * Status of the merge request. Deprecated in 14.0: This was renamed.
   * @deprecated This was renamed. Please use `MergeRequest.mergeStatusEnum`. Deprecated in 14.0.
   */
  mergeStatus?: Maybe<Scalars['String']>;
  /** Merge status of the merge request. */
  mergeStatusEnum?: Maybe<MergeStatus>;
  /** User who merged this merge request or set it to merge when pipeline succeeds. */
  mergeUser?: Maybe<UserCore>;
  /** Indicates if the merge has been set to be merged when its pipeline succeeds (MWPS). */
  mergeWhenPipelineSucceeds?: Maybe<Scalars['Boolean']>;
  /** Indicates if the merge request is mergeable. */
  mergeable: Scalars['Boolean'];
  /** Indicates if all discussions in the merge request have been resolved, allowing the merge request to be merged. */
  mergeableDiscussionsState?: Maybe<Scalars['Boolean']>;
  /** Timestamp of when the merge request was merged, null if not merged. */
  mergedAt?: Maybe<Scalars['Time']>;
  /** Milestone of the merge request. */
  milestone?: Maybe<Milestone>;
  /** All notes on this noteable. */
  notes: NoteConnection;
  /** Participants in the merge request. This includes the author, assignees, reviewers, and users mentioned in notes. */
  participants?: Maybe<MergeRequestParticipantConnection>;
  /**
   * Pipelines for the merge request. Note: for performance reasons, no more than
   * the most recent 500 pipelines will be returned.
   */
  pipelines?: Maybe<PipelineConnection>;
  /** Alias for target_project. */
  project: Project;
  /** ID of the merge request project. */
  projectId: Scalars['Int'];
  /** Rebase commit SHA of the merge request. */
  rebaseCommitSha?: Maybe<Scalars['String']>;
  /** Indicates if there is a rebase currently in progress for the merge request. */
  rebaseInProgress: Scalars['Boolean'];
  /** Internal reference of the merge request. Returned in shortened format by default. */
  reference: Scalars['String'];
  /** Users from whom a review has been requested. */
  reviewers?: Maybe<MergeRequestReviewerConnection>;
  /** Indicates if the merge request is created by @GitLab-Security-Bot. */
  securityAutoFix?: Maybe<Scalars['Boolean']>;
  /** Indicates if the merge request will be rebased. */
  shouldBeRebased: Scalars['Boolean'];
  /** Indicates if the source branch of the merge request will be deleted after merge. */
  shouldRemoveSourceBranch?: Maybe<Scalars['Boolean']>;
  /** Source branch of the merge request. */
  sourceBranch: Scalars['String'];
  /** Indicates if the source branch of the merge request exists. */
  sourceBranchExists: Scalars['Boolean'];
  /** Indicates if the source branch is protected. */
  sourceBranchProtected: Scalars['Boolean'];
  /** Source project of the merge request. */
  sourceProject?: Maybe<Project>;
  /** ID of the merge request source project. */
  sourceProjectId?: Maybe<Scalars['Int']>;
  /** Indicates if squash on merge is enabled. */
  squash: Scalars['Boolean'];
  /** Indicates if squash on merge is enabled. */
  squashOnMerge: Scalars['Boolean'];
  /** State of the merge request. */
  state: MergeRequestState;
  /** Indicates if the currently logged in user is subscribed to this merge request. */
  subscribed: Scalars['Boolean'];
  /** Target branch of the merge request. */
  targetBranch: Scalars['String'];
  /** Indicates if the target branch of the merge request exists. */
  targetBranchExists: Scalars['Boolean'];
  /** Target project of the merge request. */
  targetProject: Project;
  /** ID of the merge request target project. */
  targetProjectId: Scalars['Int'];
  /** Completion status of tasks */
  taskCompletionStatus: TaskCompletionStatus;
  /** Time estimate of the merge request. */
  timeEstimate: Scalars['Int'];
  /** Timelogs on the merge request. */
  timelogs: TimelogConnection;
  /** Title of the merge request. */
  title: Scalars['String'];
  /** The GitLab Flavored Markdown rendering of `title` */
  titleHtml?: Maybe<Scalars['String']>;
  /** Total time reported as spent on the merge request. */
  totalTimeSpent: Scalars['Int'];
  /** Timestamp of when the merge request was last updated. */
  updatedAt: Scalars['Time'];
  /** Number of upvotes for the merge request. */
  upvotes: Scalars['Int'];
  /** Number of user discussions in the merge request. */
  userDiscussionsCount?: Maybe<Scalars['Int']>;
  /** User notes count of the merge request. */
  userNotesCount?: Maybe<Scalars['Int']>;
  /** Permissions for the current user on the resource */
  userPermissions: MergeRequestPermissions;
  /** Web URL of the merge request. */
  webUrl?: Maybe<Scalars['String']>;
};


export type MergeRequestApprovedByArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MergeRequestAssigneesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MergeRequestCommitsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MergeRequestCommitsWithoutMergeCommitsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MergeRequestCommittersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MergeRequestCurrentUserTodosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<TodoStateEnum>;
};


export type MergeRequestDiffStatsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


export type MergeRequestDiscussionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MergeRequestLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MergeRequestNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MergeRequestParticipantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MergeRequestPipelinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<PipelineScopeEnum>;
  sha?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PipelineStatusEnum>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MergeRequestReferenceArgs = {
  full?: InputMaybe<Scalars['Boolean']>;
};


export type MergeRequestReviewersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MergeRequestTimelogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Autogenerated input type of MergeRequestAccept */
export type MergeRequestAcceptInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Custom merge commit message. */
  commitMessage?: InputMaybe<Scalars['String']>;
  /** IID of the merge request to mutate. */
  iid: Scalars['String'];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars['ID'];
  /** HEAD SHA at the time when this merge was requested. */
  sha: Scalars['String'];
  /** Should the source branch be removed. */
  shouldRemoveSourceBranch?: InputMaybe<Scalars['Boolean']>;
  /** Squash commits on the source branch before merge. */
  squash?: InputMaybe<Scalars['Boolean']>;
  /** Custom squash commit message (if squash is true). */
  squashCommitMessage?: InputMaybe<Scalars['String']>;
  /** How to merge this merge request. */
  strategy?: InputMaybe<MergeStrategyEnum>;
};

/** Autogenerated return type of MergeRequestAccept */
export type MergeRequestAcceptPayload = {
  __typename?: 'MergeRequestAcceptPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Merge request after mutation. */
  mergeRequest?: Maybe<MergeRequest>;
};

/** A user assigned to a merge request. */
export type MergeRequestAssignee = User & {
  __typename?: 'MergeRequestAssignee';
  /** Merge requests assigned to the user. */
  assignedMergeRequests?: Maybe<MergeRequestConnection>;
  /** Merge requests authored by the user. */
  authoredMergeRequests?: Maybe<MergeRequestConnection>;
  /** URL of the user's avatar. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** Indicates if the user is a bot. */
  bot: Scalars['Boolean'];
  /** User callouts that belong to the user. */
  callouts?: Maybe<UserCalloutConnection>;
  /**
   * User email. Deprecated in 13.7: This was renamed.
   * @deprecated This was renamed. Please use `User.publicEmail`. Deprecated in 13.7.
   */
  email?: Maybe<Scalars['String']>;
  /** Whether Gitpod is enabled at the user level. */
  gitpodEnabled?: Maybe<Scalars['Boolean']>;
  /** Group count for the user. */
  groupCount?: Maybe<Scalars['Int']>;
  /** Group memberships of the user. */
  groupMemberships?: Maybe<GroupMemberConnection>;
  /** Groups where the user has access. */
  groups?: Maybe<GroupConnection>;
  /** ID of the user. */
  id: Scalars['ID'];
  /** Location of the user. */
  location?: Maybe<Scalars['String']>;
  /** Details of this user's interactions with the merge request. */
  mergeRequestInteraction?: Maybe<UserMergeRequestInteraction>;
  /**
   * Human-readable name of the user. Returns `****` if the user is a project bot
   * and the requester does not have permission to view the project.
   */
  name: Scalars['String'];
  /** Personal namespace of the user. */
  namespace?: Maybe<Namespace>;
  /** Web path to the Gitpod section within user preferences. */
  preferencesGitpodPath?: Maybe<Scalars['String']>;
  /** Web path to enable Gitpod for the user. */
  profileEnableGitpodPath?: Maybe<Scalars['String']>;
  /** Project memberships of the user. */
  projectMemberships?: Maybe<ProjectMemberConnection>;
  /** User's public email. */
  publicEmail?: Maybe<Scalars['String']>;
  /** Merge requests assigned to the user for review. */
  reviewRequestedMergeRequests?: Maybe<MergeRequestConnection>;
  /** Saved replies authored by the user. Will not return saved replies if `saved_replies` feature flag is disabled. */
  savedReplies?: Maybe<SavedReplyConnection>;
  /** Snippets authored by the user. */
  snippets?: Maybe<SnippetConnection>;
  /** Projects starred by the user. */
  starredProjects?: Maybe<ProjectConnection>;
  /** State of the user. */
  state: UserState;
  /** User status. */
  status?: Maybe<UserStatus>;
  /** Time logged by the user. */
  timelogs?: Maybe<TimelogConnection>;
  /** To-do items of the user. */
  todos?: Maybe<TodoConnection>;
  /** Permissions for the current user on the resource. */
  userPermissions: UserPermissions;
  /** Username of the user. Unique within this instance of GitLab. */
  username: Scalars['String'];
  /** Web path of the user. */
  webPath: Scalars['String'];
  /** Web URL of the user. */
  webUrl: Scalars['String'];
};


/** A user assigned to a merge request. */
export type MergeRequestAssigneeAssignedMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** A user assigned to a merge request. */
export type MergeRequestAssigneeAuthoredMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** A user assigned to a merge request. */
export type MergeRequestAssigneeCalloutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A user assigned to a merge request. */
export type MergeRequestAssigneeGroupMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A user assigned to a merge request. */
export type MergeRequestAssigneeGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  permissionScope?: InputMaybe<GroupPermission>;
  search?: InputMaybe<Scalars['String']>;
};


/** A user assigned to a merge request. */
export type MergeRequestAssigneeProjectMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A user assigned to a merge request. */
export type MergeRequestAssigneeReviewRequestedMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** A user assigned to a merge request. */
export type MergeRequestAssigneeSavedRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A user assigned to a merge request. */
export type MergeRequestAssigneeSnippetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['SnippetID']>>;
  last?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<TypeEnum>;
  visibility?: InputMaybe<VisibilityScopesEnum>;
};


/** A user assigned to a merge request. */
export type MergeRequestAssigneeStarredProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** A user assigned to a merge request. */
export type MergeRequestAssigneeTimelogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Time']>;
  endTime?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['GroupID']>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  startDate?: InputMaybe<Scalars['Time']>;
  startTime?: InputMaybe<Scalars['Time']>;
  username?: InputMaybe<Scalars['String']>;
};


/** A user assigned to a merge request. */
export type MergeRequestAssigneeTodosArgs = {
  action?: InputMaybe<Array<TodoActionEnum>>;
  after?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Array<Scalars['ID']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Array<Scalars['ID']>>;
  state?: InputMaybe<Array<TodoStateEnum>>;
  type?: InputMaybe<Array<TodoTargetEnum>>;
};

/** The connection type for MergeRequestAssignee. */
export type MergeRequestAssigneeConnection = {
  __typename?: 'MergeRequestAssigneeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MergeRequestAssigneeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MergeRequestAssignee>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MergeRequestAssigneeEdge = {
  __typename?: 'MergeRequestAssigneeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<MergeRequestAssignee>;
};

/** The author of the merge request. */
export type MergeRequestAuthor = User & {
  __typename?: 'MergeRequestAuthor';
  /** Merge requests assigned to the user. */
  assignedMergeRequests?: Maybe<MergeRequestConnection>;
  /** Merge requests authored by the user. */
  authoredMergeRequests?: Maybe<MergeRequestConnection>;
  /** URL of the user's avatar. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** Indicates if the user is a bot. */
  bot: Scalars['Boolean'];
  /** User callouts that belong to the user. */
  callouts?: Maybe<UserCalloutConnection>;
  /**
   * User email. Deprecated in 13.7: This was renamed.
   * @deprecated This was renamed. Please use `User.publicEmail`. Deprecated in 13.7.
   */
  email?: Maybe<Scalars['String']>;
  /** Whether Gitpod is enabled at the user level. */
  gitpodEnabled?: Maybe<Scalars['Boolean']>;
  /** Group count for the user. */
  groupCount?: Maybe<Scalars['Int']>;
  /** Group memberships of the user. */
  groupMemberships?: Maybe<GroupMemberConnection>;
  /** Groups where the user has access. */
  groups?: Maybe<GroupConnection>;
  /** ID of the user. */
  id: Scalars['ID'];
  /** Location of the user. */
  location?: Maybe<Scalars['String']>;
  /** Details of this user's interactions with the merge request. */
  mergeRequestInteraction?: Maybe<UserMergeRequestInteraction>;
  /**
   * Human-readable name of the user. Returns `****` if the user is a project bot
   * and the requester does not have permission to view the project.
   */
  name: Scalars['String'];
  /** Personal namespace of the user. */
  namespace?: Maybe<Namespace>;
  /** Web path to the Gitpod section within user preferences. */
  preferencesGitpodPath?: Maybe<Scalars['String']>;
  /** Web path to enable Gitpod for the user. */
  profileEnableGitpodPath?: Maybe<Scalars['String']>;
  /** Project memberships of the user. */
  projectMemberships?: Maybe<ProjectMemberConnection>;
  /** User's public email. */
  publicEmail?: Maybe<Scalars['String']>;
  /** Merge requests assigned to the user for review. */
  reviewRequestedMergeRequests?: Maybe<MergeRequestConnection>;
  /** Saved replies authored by the user. Will not return saved replies if `saved_replies` feature flag is disabled. */
  savedReplies?: Maybe<SavedReplyConnection>;
  /** Snippets authored by the user. */
  snippets?: Maybe<SnippetConnection>;
  /** Projects starred by the user. */
  starredProjects?: Maybe<ProjectConnection>;
  /** State of the user. */
  state: UserState;
  /** User status. */
  status?: Maybe<UserStatus>;
  /** Time logged by the user. */
  timelogs?: Maybe<TimelogConnection>;
  /** To-do items of the user. */
  todos?: Maybe<TodoConnection>;
  /** Permissions for the current user on the resource. */
  userPermissions: UserPermissions;
  /** Username of the user. Unique within this instance of GitLab. */
  username: Scalars['String'];
  /** Web path of the user. */
  webPath: Scalars['String'];
  /** Web URL of the user. */
  webUrl: Scalars['String'];
};


/** The author of the merge request. */
export type MergeRequestAuthorAssignedMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** The author of the merge request. */
export type MergeRequestAuthorAuthoredMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** The author of the merge request. */
export type MergeRequestAuthorCalloutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The author of the merge request. */
export type MergeRequestAuthorGroupMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The author of the merge request. */
export type MergeRequestAuthorGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  permissionScope?: InputMaybe<GroupPermission>;
  search?: InputMaybe<Scalars['String']>;
};


/** The author of the merge request. */
export type MergeRequestAuthorProjectMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The author of the merge request. */
export type MergeRequestAuthorReviewRequestedMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** The author of the merge request. */
export type MergeRequestAuthorSavedRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** The author of the merge request. */
export type MergeRequestAuthorSnippetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['SnippetID']>>;
  last?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<TypeEnum>;
  visibility?: InputMaybe<VisibilityScopesEnum>;
};


/** The author of the merge request. */
export type MergeRequestAuthorStarredProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** The author of the merge request. */
export type MergeRequestAuthorTimelogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Time']>;
  endTime?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['GroupID']>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  startDate?: InputMaybe<Scalars['Time']>;
  startTime?: InputMaybe<Scalars['Time']>;
  username?: InputMaybe<Scalars['String']>;
};


/** The author of the merge request. */
export type MergeRequestAuthorTodosArgs = {
  action?: InputMaybe<Array<TodoActionEnum>>;
  after?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Array<Scalars['ID']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Array<Scalars['ID']>>;
  state?: InputMaybe<Array<TodoStateEnum>>;
  type?: InputMaybe<Array<TodoTargetEnum>>;
};

/** The connection type for MergeRequest. */
export type MergeRequestConnection = {
  __typename?: 'MergeRequestConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MergeRequestEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MergeRequest>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Total sum of time to merge, in seconds, for the collection of merge requests. */
  totalTimeToMerge?: Maybe<Scalars['Float']>;
};

/** Autogenerated input type of MergeRequestCreate */
export type MergeRequestCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Description of the merge request (Markdown rendered as HTML for caching). */
  description?: InputMaybe<Scalars['String']>;
  /** Labels of the merge request. */
  labels?: InputMaybe<Array<Scalars['String']>>;
  /** Project full path the merge request is associated with. */
  projectPath: Scalars['ID'];
  /** Source branch of the merge request. */
  sourceBranch: Scalars['String'];
  /** Target branch of the merge request. */
  targetBranch: Scalars['String'];
  /** Title of the merge request. */
  title: Scalars['String'];
};

/** Autogenerated return type of MergeRequestCreate */
export type MergeRequestCreatePayload = {
  __typename?: 'MergeRequestCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Merge request after mutation. */
  mergeRequest?: Maybe<MergeRequest>;
};

/** An edge in a connection. */
export type MergeRequestEdge = {
  __typename?: 'MergeRequestEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<MergeRequest>;
};

/** New state to apply to a merge request. */
export type MergeRequestNewState =
  /** Close the merge request if it is open. */
  | 'CLOSED'
  /** Open the merge request if it is closed. */
  | 'OPEN';

/** A user participating in a merge request. */
export type MergeRequestParticipant = User & {
  __typename?: 'MergeRequestParticipant';
  /** Merge requests assigned to the user. */
  assignedMergeRequests?: Maybe<MergeRequestConnection>;
  /** Merge requests authored by the user. */
  authoredMergeRequests?: Maybe<MergeRequestConnection>;
  /** URL of the user's avatar. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** Indicates if the user is a bot. */
  bot: Scalars['Boolean'];
  /** User callouts that belong to the user. */
  callouts?: Maybe<UserCalloutConnection>;
  /**
   * User email. Deprecated in 13.7: This was renamed.
   * @deprecated This was renamed. Please use `User.publicEmail`. Deprecated in 13.7.
   */
  email?: Maybe<Scalars['String']>;
  /** Whether Gitpod is enabled at the user level. */
  gitpodEnabled?: Maybe<Scalars['Boolean']>;
  /** Group count for the user. */
  groupCount?: Maybe<Scalars['Int']>;
  /** Group memberships of the user. */
  groupMemberships?: Maybe<GroupMemberConnection>;
  /** Groups where the user has access. */
  groups?: Maybe<GroupConnection>;
  /** ID of the user. */
  id: Scalars['ID'];
  /** Location of the user. */
  location?: Maybe<Scalars['String']>;
  /** Details of this user's interactions with the merge request. */
  mergeRequestInteraction?: Maybe<UserMergeRequestInteraction>;
  /**
   * Human-readable name of the user. Returns `****` if the user is a project bot
   * and the requester does not have permission to view the project.
   */
  name: Scalars['String'];
  /** Personal namespace of the user. */
  namespace?: Maybe<Namespace>;
  /** Web path to the Gitpod section within user preferences. */
  preferencesGitpodPath?: Maybe<Scalars['String']>;
  /** Web path to enable Gitpod for the user. */
  profileEnableGitpodPath?: Maybe<Scalars['String']>;
  /** Project memberships of the user. */
  projectMemberships?: Maybe<ProjectMemberConnection>;
  /** User's public email. */
  publicEmail?: Maybe<Scalars['String']>;
  /** Merge requests assigned to the user for review. */
  reviewRequestedMergeRequests?: Maybe<MergeRequestConnection>;
  /** Saved replies authored by the user. Will not return saved replies if `saved_replies` feature flag is disabled. */
  savedReplies?: Maybe<SavedReplyConnection>;
  /** Snippets authored by the user. */
  snippets?: Maybe<SnippetConnection>;
  /** Projects starred by the user. */
  starredProjects?: Maybe<ProjectConnection>;
  /** State of the user. */
  state: UserState;
  /** User status. */
  status?: Maybe<UserStatus>;
  /** Time logged by the user. */
  timelogs?: Maybe<TimelogConnection>;
  /** To-do items of the user. */
  todos?: Maybe<TodoConnection>;
  /** Permissions for the current user on the resource. */
  userPermissions: UserPermissions;
  /** Username of the user. Unique within this instance of GitLab. */
  username: Scalars['String'];
  /** Web path of the user. */
  webPath: Scalars['String'];
  /** Web URL of the user. */
  webUrl: Scalars['String'];
};


/** A user participating in a merge request. */
export type MergeRequestParticipantAssignedMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** A user participating in a merge request. */
export type MergeRequestParticipantAuthoredMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** A user participating in a merge request. */
export type MergeRequestParticipantCalloutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A user participating in a merge request. */
export type MergeRequestParticipantGroupMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A user participating in a merge request. */
export type MergeRequestParticipantGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  permissionScope?: InputMaybe<GroupPermission>;
  search?: InputMaybe<Scalars['String']>;
};


/** A user participating in a merge request. */
export type MergeRequestParticipantProjectMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A user participating in a merge request. */
export type MergeRequestParticipantReviewRequestedMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** A user participating in a merge request. */
export type MergeRequestParticipantSavedRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A user participating in a merge request. */
export type MergeRequestParticipantSnippetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['SnippetID']>>;
  last?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<TypeEnum>;
  visibility?: InputMaybe<VisibilityScopesEnum>;
};


/** A user participating in a merge request. */
export type MergeRequestParticipantStarredProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** A user participating in a merge request. */
export type MergeRequestParticipantTimelogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Time']>;
  endTime?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['GroupID']>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  startDate?: InputMaybe<Scalars['Time']>;
  startTime?: InputMaybe<Scalars['Time']>;
  username?: InputMaybe<Scalars['String']>;
};


/** A user participating in a merge request. */
export type MergeRequestParticipantTodosArgs = {
  action?: InputMaybe<Array<TodoActionEnum>>;
  after?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Array<Scalars['ID']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Array<Scalars['ID']>>;
  state?: InputMaybe<Array<TodoStateEnum>>;
  type?: InputMaybe<Array<TodoTargetEnum>>;
};

/** The connection type for MergeRequestParticipant. */
export type MergeRequestParticipantConnection = {
  __typename?: 'MergeRequestParticipantConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MergeRequestParticipantEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MergeRequestParticipant>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MergeRequestParticipantEdge = {
  __typename?: 'MergeRequestParticipantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<MergeRequestParticipant>;
};

/** Check permissions for the current user on a merge request */
export type MergeRequestPermissions = {
  __typename?: 'MergeRequestPermissions';
  /** Indicates the user can perform `admin_merge_request` on this resource */
  adminMergeRequest: Scalars['Boolean'];
  /** Indicates the user can perform `can_merge` on this resource */
  canMerge: Scalars['Boolean'];
  /** Indicates the user can perform `cherry_pick_on_current_merge_request` on this resource */
  cherryPickOnCurrentMergeRequest: Scalars['Boolean'];
  /** Indicates the user can perform `create_note` on this resource */
  createNote: Scalars['Boolean'];
  /** Indicates the user can perform `push_to_source_branch` on this resource */
  pushToSourceBranch: Scalars['Boolean'];
  /** Indicates the user can perform `read_merge_request` on this resource */
  readMergeRequest: Scalars['Boolean'];
  /** Indicates the user can perform `remove_source_branch` on this resource */
  removeSourceBranch: Scalars['Boolean'];
  /** Indicates the user can perform `revert_on_current_merge_request` on this resource */
  revertOnCurrentMergeRequest: Scalars['Boolean'];
  /** Indicates the user can perform `update_merge_request` on this resource */
  updateMergeRequest: Scalars['Boolean'];
};

/** State of a review of a GitLab merge request. */
export type MergeRequestReviewState =
  /** The merge request is attention_requested. */
  | 'ATTENTION_REQUESTED'
  /** The merge request is reviewed. */
  | 'REVIEWED'
  /** The merge request is unreviewed. */
  | 'UNREVIEWED';

/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewer = User & {
  __typename?: 'MergeRequestReviewer';
  /** Merge requests assigned to the user. */
  assignedMergeRequests?: Maybe<MergeRequestConnection>;
  /** Merge requests authored by the user. */
  authoredMergeRequests?: Maybe<MergeRequestConnection>;
  /** URL of the user's avatar. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** Indicates if the user is a bot. */
  bot: Scalars['Boolean'];
  /** User callouts that belong to the user. */
  callouts?: Maybe<UserCalloutConnection>;
  /**
   * User email. Deprecated in 13.7: This was renamed.
   * @deprecated This was renamed. Please use `User.publicEmail`. Deprecated in 13.7.
   */
  email?: Maybe<Scalars['String']>;
  /** Whether Gitpod is enabled at the user level. */
  gitpodEnabled?: Maybe<Scalars['Boolean']>;
  /** Group count for the user. */
  groupCount?: Maybe<Scalars['Int']>;
  /** Group memberships of the user. */
  groupMemberships?: Maybe<GroupMemberConnection>;
  /** Groups where the user has access. */
  groups?: Maybe<GroupConnection>;
  /** ID of the user. */
  id: Scalars['ID'];
  /** Location of the user. */
  location?: Maybe<Scalars['String']>;
  /** Details of this user's interactions with the merge request. */
  mergeRequestInteraction?: Maybe<UserMergeRequestInteraction>;
  /**
   * Human-readable name of the user. Returns `****` if the user is a project bot
   * and the requester does not have permission to view the project.
   */
  name: Scalars['String'];
  /** Personal namespace of the user. */
  namespace?: Maybe<Namespace>;
  /** Web path to the Gitpod section within user preferences. */
  preferencesGitpodPath?: Maybe<Scalars['String']>;
  /** Web path to enable Gitpod for the user. */
  profileEnableGitpodPath?: Maybe<Scalars['String']>;
  /** Project memberships of the user. */
  projectMemberships?: Maybe<ProjectMemberConnection>;
  /** User's public email. */
  publicEmail?: Maybe<Scalars['String']>;
  /** Merge requests assigned to the user for review. */
  reviewRequestedMergeRequests?: Maybe<MergeRequestConnection>;
  /** Saved replies authored by the user. Will not return saved replies if `saved_replies` feature flag is disabled. */
  savedReplies?: Maybe<SavedReplyConnection>;
  /** Snippets authored by the user. */
  snippets?: Maybe<SnippetConnection>;
  /** Projects starred by the user. */
  starredProjects?: Maybe<ProjectConnection>;
  /** State of the user. */
  state: UserState;
  /** User status. */
  status?: Maybe<UserStatus>;
  /** Time logged by the user. */
  timelogs?: Maybe<TimelogConnection>;
  /** To-do items of the user. */
  todos?: Maybe<TodoConnection>;
  /** Permissions for the current user on the resource. */
  userPermissions: UserPermissions;
  /** Username of the user. Unique within this instance of GitLab. */
  username: Scalars['String'];
  /** Web path of the user. */
  webPath: Scalars['String'];
  /** Web URL of the user. */
  webUrl: Scalars['String'];
};


/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewerAssignedMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewerAuthoredMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewerCalloutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewerGroupMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewerGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  permissionScope?: InputMaybe<GroupPermission>;
  search?: InputMaybe<Scalars['String']>;
};


/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewerProjectMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewerReviewRequestedMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewerSavedRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewerSnippetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['SnippetID']>>;
  last?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<TypeEnum>;
  visibility?: InputMaybe<VisibilityScopesEnum>;
};


/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewerStarredProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewerTimelogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Time']>;
  endTime?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['GroupID']>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  startDate?: InputMaybe<Scalars['Time']>;
  startTime?: InputMaybe<Scalars['Time']>;
  username?: InputMaybe<Scalars['String']>;
};


/** A user assigned to a merge request as a reviewer. */
export type MergeRequestReviewerTodosArgs = {
  action?: InputMaybe<Array<TodoActionEnum>>;
  after?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Array<Scalars['ID']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Array<Scalars['ID']>>;
  state?: InputMaybe<Array<TodoStateEnum>>;
  type?: InputMaybe<Array<TodoTargetEnum>>;
};

/** The connection type for MergeRequestReviewer. */
export type MergeRequestReviewerConnection = {
  __typename?: 'MergeRequestReviewerConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MergeRequestReviewerEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MergeRequestReviewer>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MergeRequestReviewerEdge = {
  __typename?: 'MergeRequestReviewerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<MergeRequestReviewer>;
};

/** Autogenerated input type of MergeRequestReviewerRereview */
export type MergeRequestReviewerRereviewInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the merge request to mutate. */
  iid: Scalars['String'];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars['ID'];
  /** User ID for the user that has been requested for a new review. */
  userId: Scalars['UserID'];
};

/** Autogenerated return type of MergeRequestReviewerRereview */
export type MergeRequestReviewerRereviewPayload = {
  __typename?: 'MergeRequestReviewerRereviewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Merge request after mutation. */
  mergeRequest?: Maybe<MergeRequest>;
};

/** Autogenerated input type of MergeRequestSetAssignees */
export type MergeRequestSetAssigneesInput = {
  /** Usernames to assign to the resource. Replaces existing assignees by default. */
  assigneeUsernames: Array<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the merge request to mutate. */
  iid: Scalars['String'];
  /** Operation to perform. Defaults to REPLACE. */
  operationMode?: InputMaybe<MutationOperationMode>;
  /** Project the merge request to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of MergeRequestSetAssignees */
export type MergeRequestSetAssigneesPayload = {
  __typename?: 'MergeRequestSetAssigneesPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Merge request after mutation. */
  mergeRequest?: Maybe<MergeRequest>;
};

/** Autogenerated input type of MergeRequestSetDraft */
export type MergeRequestSetDraftInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether or not to set the merge request as a draft. */
  draft: Scalars['Boolean'];
  /** IID of the merge request to mutate. */
  iid: Scalars['String'];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of MergeRequestSetDraft */
export type MergeRequestSetDraftPayload = {
  __typename?: 'MergeRequestSetDraftPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Merge request after mutation. */
  mergeRequest?: Maybe<MergeRequest>;
};

/** Autogenerated input type of MergeRequestSetLabels */
export type MergeRequestSetLabelsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the merge request to mutate. */
  iid: Scalars['String'];
  /** Label IDs to set. Replaces existing labels by default. */
  labelIds: Array<Scalars['LabelID']>;
  /** Changes the operation mode. Defaults to REPLACE. */
  operationMode?: InputMaybe<MutationOperationMode>;
  /** Project the merge request to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of MergeRequestSetLabels */
export type MergeRequestSetLabelsPayload = {
  __typename?: 'MergeRequestSetLabelsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Merge request after mutation. */
  mergeRequest?: Maybe<MergeRequest>;
};

/** Autogenerated input type of MergeRequestSetLocked */
export type MergeRequestSetLockedInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the merge request to mutate. */
  iid: Scalars['String'];
  /** Whether or not to lock the merge request. */
  locked: Scalars['Boolean'];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of MergeRequestSetLocked */
export type MergeRequestSetLockedPayload = {
  __typename?: 'MergeRequestSetLockedPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Merge request after mutation. */
  mergeRequest?: Maybe<MergeRequest>;
};

/** Autogenerated input type of MergeRequestSetMilestone */
export type MergeRequestSetMilestoneInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the merge request to mutate. */
  iid: Scalars['String'];
  /** Milestone to assign to the merge request. */
  milestoneId?: InputMaybe<Scalars['MilestoneID']>;
  /** Project the merge request to mutate is in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of MergeRequestSetMilestone */
export type MergeRequestSetMilestonePayload = {
  __typename?: 'MergeRequestSetMilestonePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Merge request after mutation. */
  mergeRequest?: Maybe<MergeRequest>;
};

/** Autogenerated input type of MergeRequestSetSubscription */
export type MergeRequestSetSubscriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the merge request to mutate. */
  iid: Scalars['String'];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars['ID'];
  /** Desired state of the subscription. */
  subscribedState: Scalars['Boolean'];
};

/** Autogenerated return type of MergeRequestSetSubscription */
export type MergeRequestSetSubscriptionPayload = {
  __typename?: 'MergeRequestSetSubscriptionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Merge request after mutation. */
  mergeRequest?: Maybe<MergeRequest>;
};

/** Values for sorting merge requests */
export type MergeRequestSort =
  /** Closed time by ascending order. */
  | 'CLOSED_AT_ASC'
  /** Closed time by descending order. */
  | 'CLOSED_AT_DESC'
  /** Created at ascending order. */
  | 'CREATED_ASC'
  /** Created at descending order. */
  | 'CREATED_DESC'
  /** Label priority by ascending order. */
  | 'LABEL_PRIORITY_ASC'
  /** Label priority by descending order. */
  | 'LABEL_PRIORITY_DESC'
  /** Merge time by ascending order. */
  | 'MERGED_AT_ASC'
  /** Merge time by descending order. */
  | 'MERGED_AT_DESC'
  /** Milestone due date by ascending order. */
  | 'MILESTONE_DUE_ASC'
  /** Milestone due date by descending order. */
  | 'MILESTONE_DUE_DESC'
  /** Priority by ascending order. */
  | 'PRIORITY_ASC'
  /** Priority by descending order. */
  | 'PRIORITY_DESC'
  /** Title by ascending order. */
  | 'TITLE_ASC'
  /** Title by descending order. */
  | 'TITLE_DESC'
  /** Updated at ascending order. */
  | 'UPDATED_ASC'
  /** Updated at descending order. */
  | 'UPDATED_DESC'
  /** Created at ascending order. */
  | 'created_asc'
  /** Created at descending order. */
  | 'created_desc'
  /** Updated at ascending order. */
  | 'updated_asc'
  /** Updated at descending order. */
  | 'updated_desc';

/** State of a GitLab merge request */
export type MergeRequestState =
  /** All available. */
  | 'all'
  /** In closed state. */
  | 'closed'
  /** Discussion has been locked. */
  | 'locked'
  /** Merge request has been merged. */
  | 'merged'
  /** In open state. */
  | 'opened';

/** Autogenerated input type of MergeRequestUpdate */
export type MergeRequestUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Description of the merge request (Markdown rendered as HTML for caching). */
  description?: InputMaybe<Scalars['String']>;
  /** IID of the merge request to mutate. */
  iid: Scalars['String'];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars['ID'];
  /** Action to perform to change the state. */
  state?: InputMaybe<MergeRequestNewState>;
  /** Target branch of the merge request. */
  targetBranch?: InputMaybe<Scalars['String']>;
  /** Title of the merge request. */
  title?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of MergeRequestUpdate */
export type MergeRequestUpdatePayload = {
  __typename?: 'MergeRequestUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Merge request after mutation. */
  mergeRequest?: Maybe<MergeRequest>;
};

export type MergeRequestsResolverNegatedParams = {
  /** Array of label names. All resolved merge requests will not have these labels. */
  labels?: InputMaybe<Array<Scalars['String']>>;
  /** Title of the milestone. */
  milestoneTitle?: InputMaybe<Scalars['String']>;
};

/** Representation of whether a GitLab merge request can be merged. */
export type MergeStatus =
  /** There are conflicts between the source and target branches. */
  | 'CANNOT_BE_MERGED'
  /** Currently unchecked. The previous state was `CANNOT_BE_MERGED`. */
  | 'CANNOT_BE_MERGED_RECHECK'
  /** There are no conflicts between the source and target branches. */
  | 'CAN_BE_MERGED'
  /** Currently checking for mergeability. */
  | 'CHECKING'
  /** Merge status has not been checked. */
  | 'UNCHECKED';

export type MergeStrategyEnum =
  /** Use the merge_when_pipeline_succeeds merge strategy. */
  | 'MERGE_WHEN_PIPELINE_SUCCEEDS';

export type Metadata = {
  __typename?: 'Metadata';
  /** Metadata about KAS. */
  kas: Kas;
  /** Revision. */
  revision: Scalars['String'];
  /** Version. */
  version: Scalars['String'];
};

export type MetricsDashboard = {
  __typename?: 'MetricsDashboard';
  /** Annotations added to the dashboard. */
  annotations?: Maybe<MetricsDashboardAnnotationConnection>;
  /** Path to a file with the dashboard definition. */
  path?: Maybe<Scalars['String']>;
  /** Dashboard schema validation warnings. */
  schemaValidationWarnings?: Maybe<Array<Scalars['String']>>;
};


export type MetricsDashboardAnnotationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  from: Scalars['Time'];
  last?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Time']>;
};

export type MetricsDashboardAnnotation = {
  __typename?: 'MetricsDashboardAnnotation';
  /** Description of the annotation. */
  description?: Maybe<Scalars['String']>;
  /** Timestamp marking end of annotated time span. */
  endingAt?: Maybe<Scalars['Time']>;
  /** ID of the annotation. */
  id: Scalars['ID'];
  /** ID of a dashboard panel to which the annotation should be scoped. */
  panelId?: Maybe<Scalars['String']>;
  /** Timestamp marking start of annotated time span. */
  startingAt?: Maybe<Scalars['Time']>;
};

/** The connection type for MetricsDashboardAnnotation. */
export type MetricsDashboardAnnotationConnection = {
  __typename?: 'MetricsDashboardAnnotationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MetricsDashboardAnnotationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<MetricsDashboardAnnotation>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MetricsDashboardAnnotationEdge = {
  __typename?: 'MetricsDashboardAnnotationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<MetricsDashboardAnnotation>;
};

/** Represents a milestone */
export type Milestone = {
  __typename?: 'Milestone';
  /** Timestamp of milestone creation. */
  createdAt: Scalars['Time'];
  /** Description of the milestone. */
  description?: Maybe<Scalars['String']>;
  /** Timestamp of the milestone due date. */
  dueDate?: Maybe<Scalars['Time']>;
  /**
   * Expired state of the milestone (a milestone is expired when the due date is
   * past the current date). Defaults to `false` when due date has not been set.
   */
  expired: Scalars['Boolean'];
  /** Indicates if milestone is at group level. */
  groupMilestone: Scalars['Boolean'];
  /** ID of the milestone. */
  id: Scalars['ID'];
  /** Internal ID of the milestone. */
  iid: Scalars['ID'];
  /** Indicates if milestone is at project level. */
  projectMilestone: Scalars['Boolean'];
  /** Releases associated with this milestone. */
  releases?: Maybe<ReleaseConnection>;
  /** Timestamp of the milestone start date. */
  startDate?: Maybe<Scalars['Time']>;
  /** State of the milestone. */
  state: MilestoneStateEnum;
  /** Milestone statistics. */
  stats?: Maybe<MilestoneStats>;
  /** Indicates if milestone is at subgroup level. */
  subgroupMilestone: Scalars['Boolean'];
  /** Title of the milestone. */
  title: Scalars['String'];
  /** Timestamp of last milestone update. */
  updatedAt: Scalars['Time'];
  /** Web path of the milestone. */
  webPath: Scalars['String'];
};


/** Represents a milestone */
export type MilestoneReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Milestone. */
export type MilestoneConnection = {
  __typename?: 'MilestoneConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MilestoneEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Milestone>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MilestoneEdge = {
  __typename?: 'MilestoneEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Milestone>;
};

/** Values for sorting milestones */
export type MilestoneSort =
  /** Created at ascending order. */
  | 'CREATED_ASC'
  /** Created at descending order. */
  | 'CREATED_DESC'
  /** Milestone due date by ascending order. */
  | 'DUE_DATE_ASC'
  /** Milestone due date by descending order. */
  | 'DUE_DATE_DESC'
  /**
   * Group milestones in this order: non-expired milestones with due dates,
   * non-expired milestones without due dates and expired milestones then sort by
   * due date in ascending order.
   */
  | 'EXPIRED_LAST_DUE_DATE_ASC'
  /**
   * Group milestones in this order: non-expired milestones with due dates,
   * non-expired milestones without due dates and expired milestones then sort by
   * due date in descending order.
   */
  | 'EXPIRED_LAST_DUE_DATE_DESC'
  /** Updated at ascending order. */
  | 'UPDATED_ASC'
  /** Updated at descending order. */
  | 'UPDATED_DESC'
  /** Created at ascending order. */
  | 'created_asc'
  /** Created at descending order. */
  | 'created_desc'
  /** Updated at ascending order. */
  | 'updated_asc'
  /** Updated at descending order. */
  | 'updated_desc';

/** Current state of milestone */
export type MilestoneStateEnum =
  /** Milestone is currently active. */
  | 'active'
  /** Milestone is closed. */
  | 'closed';

/** Contains statistics about a milestone */
export type MilestoneStats = {
  __typename?: 'MilestoneStats';
  /** Number of closed issues associated with the milestone. */
  closedIssuesCount?: Maybe<Scalars['Int']>;
  /** Total number of issues associated with the milestone. */
  totalIssuesCount?: Maybe<Scalars['Int']>;
};

/** Milestone ID wildcard values */
export type MilestoneWildcardId =
  /** Milestone is assigned. */
  | 'ANY'
  /** No milestone is assigned. */
  | 'NONE'
  /** Milestone assigned is open and started (start date <= today). */
  | 'STARTED'
  /** Milestone assigned is due in the future (due date > today). */
  | 'UPCOMING';

export type Mutation = {
  __typename?: 'Mutation';
  adminSidekiqQueuesDeleteJobs?: Maybe<AdminSidekiqQueuesDeleteJobsPayload>;
  alertSetAssignees?: Maybe<AlertSetAssigneesPayload>;
  alertTodoCreate?: Maybe<AlertTodoCreatePayload>;
  awardEmojiAdd?: Maybe<AwardEmojiAddPayload>;
  awardEmojiRemove?: Maybe<AwardEmojiRemovePayload>;
  awardEmojiToggle?: Maybe<AwardEmojiTogglePayload>;
  boardListCreate?: Maybe<BoardListCreatePayload>;
  /** @deprecated This feature is in Alpha. It can be changed or removed at any time. Introduced in 15.3. */
  bulkRunnerDelete?: Maybe<BulkRunnerDeletePayload>;
  /** @deprecated This was renamed. Please use `ProjectCiCdSettingsUpdate`. Deprecated in 15.0. */
  ciCdSettingsUpdate?: Maybe<CiCdSettingsUpdatePayload>;
  ciJobTokenScopeAddProject?: Maybe<CiJobTokenScopeAddProjectPayload>;
  ciJobTokenScopeRemoveProject?: Maybe<CiJobTokenScopeRemoveProjectPayload>;
  clusterAgentDelete?: Maybe<ClusterAgentDeletePayload>;
  clusterAgentTokenCreate?: Maybe<ClusterAgentTokenCreatePayload>;
  clusterAgentTokenRevoke?: Maybe<ClusterAgentTokenRevokePayload>;
  commitCreate?: Maybe<CommitCreatePayload>;
  /**
   * Configure SAST for a project by enabling SAST in a new or modified
   * `.gitlab-ci.yml` file in a new branch. The new branch and a URL to
   * create a Merge Request are a part of the response.
   */
  configureSast?: Maybe<ConfigureSastPayload>;
  /**
   * Enable SAST IaC for a project in a new or
   * modified `.gitlab-ci.yml` file in a new branch. The new
   * branch and a URL to create a merge request are a part of the
   * response.
   */
  configureSastIac?: Maybe<ConfigureSastIacPayload>;
  /**
   * Configure Secret Detection for a project by enabling Secret Detection
   * in a new or modified `.gitlab-ci.yml` file in a new branch. The new
   * branch and a URL to create a Merge Request are a part of the
   * response.
   */
  configureSecretDetection?: Maybe<ConfigureSecretDetectionPayload>;
  createAlertIssue?: Maybe<CreateAlertIssuePayload>;
  createAnnotation?: Maybe<CreateAnnotationPayload>;
  createBoard?: Maybe<CreateBoardPayload>;
  createBranch?: Maybe<CreateBranchPayload>;
  createClusterAgent?: Maybe<CreateClusterAgentPayload>;
  /**
   *  Available only when feature flag `custom_emoji` is enabled. This flag is
   * disabled by default, because the feature is experimental and is subject to
   * change without notice.
   */
  createCustomEmoji?: Maybe<CreateCustomEmojiPayload>;
  createDiffNote?: Maybe<CreateDiffNotePayload>;
  createImageDiffNote?: Maybe<CreateImageDiffNotePayload>;
  createIssue?: Maybe<CreateIssuePayload>;
  /**
   * Creates a Note.
   * If the body of the Note contains only quick actions,
   * the Note will be destroyed during an update, and no Note will be
   * returned.
   */
  createNote?: Maybe<CreateNotePayload>;
  createSnippet?: Maybe<CreateSnippetPayload>;
  customerRelationsContactCreate?: Maybe<CustomerRelationsContactCreatePayload>;
  customerRelationsContactUpdate?: Maybe<CustomerRelationsContactUpdatePayload>;
  customerRelationsOrganizationCreate?: Maybe<CustomerRelationsOrganizationCreatePayload>;
  customerRelationsOrganizationUpdate?: Maybe<CustomerRelationsOrganizationUpdatePayload>;
  deleteAnnotation?: Maybe<DeleteAnnotationPayload>;
  designManagementDelete?: Maybe<DesignManagementDeletePayload>;
  designManagementMove?: Maybe<DesignManagementMovePayload>;
  designManagementUpload?: Maybe<DesignManagementUploadPayload>;
  destroyBoard?: Maybe<DestroyBoardPayload>;
  destroyBoardList?: Maybe<DestroyBoardListPayload>;
  destroyContainerRepository?: Maybe<DestroyContainerRepositoryPayload>;
  destroyContainerRepositoryTags?: Maybe<DestroyContainerRepositoryTagsPayload>;
  /**
   *  Available only when feature flag `custom_emoji` is enabled. This flag is
   * disabled by default, because the feature is experimental and is subject to
   * change without notice.
   */
  destroyCustomEmoji?: Maybe<DestroyCustomEmojiPayload>;
  destroyNote?: Maybe<DestroyNotePayload>;
  destroyPackage?: Maybe<DestroyPackagePayload>;
  destroyPackageFile?: Maybe<DestroyPackageFilePayload>;
  destroyPackageFiles?: Maybe<DestroyPackageFilesPayload>;
  destroySnippet?: Maybe<DestroySnippetPayload>;
  /** Toggles the resolved state of a discussion */
  discussionToggleResolve?: Maybe<DiscussionToggleResolvePayload>;
  /**
   * A mutation that does not perform any changes.
   *
   * This is expected to be used for testing of endpoints, to verify
   * that a user has mutation access.
   */
  echoCreate?: Maybe<EchoCreatePayload>;
  /**
   * **Deprecated** This endpoint is planned to be removed along with
   * certificate-based clusters. [See this
   * epic](https://gitlab.com/groups/gitlab-org/configure/-/epics/8) for more information.
   */
  environmentsCanaryIngressUpdate?: Maybe<EnvironmentsCanaryIngressUpdatePayload>;
  groupUpdate?: Maybe<GroupUpdatePayload>;
  httpIntegrationCreate?: Maybe<HttpIntegrationCreatePayload>;
  httpIntegrationDestroy?: Maybe<HttpIntegrationDestroyPayload>;
  httpIntegrationResetToken?: Maybe<HttpIntegrationResetTokenPayload>;
  httpIntegrationUpdate?: Maybe<HttpIntegrationUpdatePayload>;
  issueMove?: Maybe<IssueMovePayload>;
  issueMoveList?: Maybe<IssueMoveListPayload>;
  issueSetAssignees?: Maybe<IssueSetAssigneesPayload>;
  issueSetConfidential?: Maybe<IssueSetConfidentialPayload>;
  issueSetCrmContacts?: Maybe<IssueSetCrmContactsPayload>;
  issueSetDueDate?: Maybe<IssueSetDueDatePayload>;
  issueSetEscalationStatus?: Maybe<IssueSetEscalationStatusPayload>;
  issueSetLocked?: Maybe<IssueSetLockedPayload>;
  issueSetSeverity?: Maybe<IssueSetSeverityPayload>;
  issueSetSubscription?: Maybe<IssueSetSubscriptionPayload>;
  jiraImportStart?: Maybe<JiraImportStartPayload>;
  jiraImportUsers?: Maybe<JiraImportUsersPayload>;
  jobCancel?: Maybe<JobCancelPayload>;
  jobPlay?: Maybe<JobPlayPayload>;
  jobRetry?: Maybe<JobRetryPayload>;
  jobUnschedule?: Maybe<JobUnschedulePayload>;
  labelCreate?: Maybe<LabelCreatePayload>;
  markAsSpamSnippet?: Maybe<MarkAsSpamSnippetPayload>;
  /**
   * Accepts a merge request.
   * When accepted, the source branch will be merged into the target branch, either
   * immediately if possible, or using one of the automatic merge strategies.
   */
  mergeRequestAccept?: Maybe<MergeRequestAcceptPayload>;
  mergeRequestCreate?: Maybe<MergeRequestCreatePayload>;
  mergeRequestReviewerRereview?: Maybe<MergeRequestReviewerRereviewPayload>;
  mergeRequestSetAssignees?: Maybe<MergeRequestSetAssigneesPayload>;
  mergeRequestSetDraft?: Maybe<MergeRequestSetDraftPayload>;
  mergeRequestSetLabels?: Maybe<MergeRequestSetLabelsPayload>;
  mergeRequestSetLocked?: Maybe<MergeRequestSetLockedPayload>;
  mergeRequestSetMilestone?: Maybe<MergeRequestSetMilestonePayload>;
  mergeRequestSetSubscription?: Maybe<MergeRequestSetSubscriptionPayload>;
  /** Update attributes of a merge request */
  mergeRequestUpdate?: Maybe<MergeRequestUpdatePayload>;
  pagesMarkOnboardingComplete?: Maybe<PagesMarkOnboardingCompletePayload>;
  pipelineCancel?: Maybe<PipelineCancelPayload>;
  pipelineDestroy?: Maybe<PipelineDestroyPayload>;
  pipelineRetry?: Maybe<PipelineRetryPayload>;
  projectCiCdSettingsUpdate?: Maybe<ProjectCiCdSettingsUpdatePayload>;
  prometheusIntegrationCreate?: Maybe<PrometheusIntegrationCreatePayload>;
  prometheusIntegrationResetToken?: Maybe<PrometheusIntegrationResetTokenPayload>;
  prometheusIntegrationUpdate?: Maybe<PrometheusIntegrationUpdatePayload>;
  releaseAssetLinkCreate?: Maybe<ReleaseAssetLinkCreatePayload>;
  releaseAssetLinkDelete?: Maybe<ReleaseAssetLinkDeletePayload>;
  releaseAssetLinkUpdate?: Maybe<ReleaseAssetLinkUpdatePayload>;
  releaseCreate?: Maybe<ReleaseCreatePayload>;
  releaseDelete?: Maybe<ReleaseDeletePayload>;
  releaseUpdate?: Maybe<ReleaseUpdatePayload>;
  /** Repositions a DiffNote on an image (a `Note` where the `position.positionType` is `"image"`) */
  repositionImageDiffNote?: Maybe<RepositionImageDiffNotePayload>;
  runnerDelete?: Maybe<RunnerDeletePayload>;
  runnerUpdate?: Maybe<RunnerUpdatePayload>;
  runnersRegistrationTokenReset?: Maybe<RunnersRegistrationTokenResetPayload>;
  savedReplyCreate?: Maybe<SavedReplyCreatePayload>;
  savedReplyDestroy?: Maybe<SavedReplyDestroyPayload>;
  savedReplyUpdate?: Maybe<SavedReplyUpdatePayload>;
  terraformStateDelete?: Maybe<TerraformStateDeletePayload>;
  terraformStateLock?: Maybe<TerraformStateLockPayload>;
  terraformStateUnlock?: Maybe<TerraformStateUnlockPayload>;
  timelineEventCreate?: Maybe<TimelineEventCreatePayload>;
  timelineEventDestroy?: Maybe<TimelineEventDestroyPayload>;
  timelineEventPromoteFromNote?: Maybe<TimelineEventPromoteFromNotePayload>;
  timelineEventUpdate?: Maybe<TimelineEventUpdatePayload>;
  timelogCreate?: Maybe<TimelogCreatePayload>;
  timelogDelete?: Maybe<TimelogDeletePayload>;
  todoCreate?: Maybe<TodoCreatePayload>;
  todoMarkDone?: Maybe<TodoMarkDonePayload>;
  todoRestore?: Maybe<TodoRestorePayload>;
  todoRestoreMany?: Maybe<TodoRestoreManyPayload>;
  todosMarkAllDone?: Maybe<TodosMarkAllDonePayload>;
  updateAlertStatus?: Maybe<UpdateAlertStatusPayload>;
  updateBoard?: Maybe<UpdateBoardPayload>;
  updateBoardList?: Maybe<UpdateBoardListPayload>;
  updateContainerExpirationPolicy?: Maybe<UpdateContainerExpirationPolicyPayload>;
  updateDependencyProxyImageTtlGroupPolicy?: Maybe<UpdateDependencyProxyImageTtlGroupPolicyPayload>;
  updateDependencyProxySettings?: Maybe<UpdateDependencyProxySettingsPayload>;
  /**
   * Updates a DiffNote on an image (a `Note` where the `position.positionType` is `"image"`).
   * If the body of the Note contains only quick actions,
   * the Note will be destroyed during an update, and no Note will be
   * returned.
   */
  updateImageDiffNote?: Maybe<UpdateImageDiffNotePayload>;
  updateIssue?: Maybe<UpdateIssuePayload>;
  updateNamespacePackageSettings?: Maybe<UpdateNamespacePackageSettingsPayload>;
  /**
   * Updates a Note.
   * If the body of the Note contains only quick actions,
   * the Note will be destroyed during an update, and no Note will be
   * returned.
   */
  updateNote?: Maybe<UpdateNotePayload>;
  updatePackagesCleanupPolicy?: Maybe<UpdatePackagesCleanupPolicyPayload>;
  updateSnippet?: Maybe<UpdateSnippetPayload>;
  /** Deletes an upload. */
  uploadDelete?: Maybe<UploadDeletePayload>;
  userCalloutCreate?: Maybe<UserCalloutCreatePayload>;
  userPreferencesUpdate?: Maybe<UserPreferencesUpdatePayload>;
  /**
   * Creates a work item. Available only when feature flag `work_items` is enabled.
   * Introduced in 15.1: This feature is in Alpha. It can be changed or removed at any time.
   * @deprecated This feature is in Alpha. It can be changed or removed at any time. Introduced in 15.1.
   */
  workItemCreate?: Maybe<WorkItemCreatePayload>;
  /**
   * Creates a work item from a task in another work item's description. Available
   * only when feature flag `work_items` is enabled. Introduced in 15.1: This
   * feature is in Alpha. It can be changed or removed at any time.
   * @deprecated This feature is in Alpha. It can be changed or removed at any time. Introduced in 15.1.
   */
  workItemCreateFromTask?: Maybe<WorkItemCreateFromTaskPayload>;
  /**
   * Deletes a work item. Available only when feature flag `work_items` is enabled.
   * Introduced in 15.1: This feature is in Alpha. It can be changed or removed at any time.
   * @deprecated This feature is in Alpha. It can be changed or removed at any time. Introduced in 15.1.
   */
  workItemDelete?: Maybe<WorkItemDeletePayload>;
  /**
   * Deletes a task in a work item's description. Available only when feature flag
   * `work_items` is enabled. Introduced in 15.1: This feature is in Alpha. It can
   * be changed or removed at any time.
   * @deprecated This feature is in Alpha. It can be changed or removed at any time. Introduced in 15.1.
   */
  workItemDeleteTask?: Maybe<WorkItemDeleteTaskPayload>;
  /**
   * Updates a work item by Global ID. Available only when feature flag
   * `work_items` is enabled. Introduced in 15.1: This feature is in Alpha. It can
   * be changed or removed at any time.
   * @deprecated This feature is in Alpha. It can be changed or removed at any time. Introduced in 15.1.
   */
  workItemUpdate?: Maybe<WorkItemUpdatePayload>;
  /**
   * Updates a work item's task by Global ID. Available only when feature flag
   * `work_items` is enabled. Introduced in 15.1: This feature is in Alpha. It can
   * be changed or removed at any time.
   * @deprecated This feature is in Alpha. It can be changed or removed at any time. Introduced in 15.1.
   */
  workItemUpdateTask?: Maybe<WorkItemUpdateTaskPayload>;
  /**
   * Updates the attributes of a work item's widgets by global ID. Available only
   * when feature flag `work_items` is enabled. Introduced in 15.1: This feature is
   * in Alpha. It can be changed or removed at any time.
   * @deprecated This feature is in Alpha. It can be changed or removed at any time. Introduced in 15.1.
   */
  workItemUpdateWidgets?: Maybe<WorkItemUpdateWidgetsPayload>;
};


export type MutationAdminSidekiqQueuesDeleteJobsArgs = {
  input: AdminSidekiqQueuesDeleteJobsInput;
};


export type MutationAlertSetAssigneesArgs = {
  input: AlertSetAssigneesInput;
};


export type MutationAlertTodoCreateArgs = {
  input: AlertTodoCreateInput;
};


export type MutationAwardEmojiAddArgs = {
  input: AwardEmojiAddInput;
};


export type MutationAwardEmojiRemoveArgs = {
  input: AwardEmojiRemoveInput;
};


export type MutationAwardEmojiToggleArgs = {
  input: AwardEmojiToggleInput;
};


export type MutationBoardListCreateArgs = {
  input: BoardListCreateInput;
};


export type MutationBulkRunnerDeleteArgs = {
  input: BulkRunnerDeleteInput;
};


export type MutationCiCdSettingsUpdateArgs = {
  input: CiCdSettingsUpdateInput;
};


export type MutationCiJobTokenScopeAddProjectArgs = {
  input: CiJobTokenScopeAddProjectInput;
};


export type MutationCiJobTokenScopeRemoveProjectArgs = {
  input: CiJobTokenScopeRemoveProjectInput;
};


export type MutationClusterAgentDeleteArgs = {
  input: ClusterAgentDeleteInput;
};


export type MutationClusterAgentTokenCreateArgs = {
  input: ClusterAgentTokenCreateInput;
};


export type MutationClusterAgentTokenRevokeArgs = {
  input: ClusterAgentTokenRevokeInput;
};


export type MutationCommitCreateArgs = {
  input: CommitCreateInput;
};


export type MutationConfigureSastArgs = {
  input: ConfigureSastInput;
};


export type MutationConfigureSastIacArgs = {
  input: ConfigureSastIacInput;
};


export type MutationConfigureSecretDetectionArgs = {
  input: ConfigureSecretDetectionInput;
};


export type MutationCreateAlertIssueArgs = {
  input: CreateAlertIssueInput;
};


export type MutationCreateAnnotationArgs = {
  input: CreateAnnotationInput;
};


export type MutationCreateBoardArgs = {
  input: CreateBoardInput;
};


export type MutationCreateBranchArgs = {
  input: CreateBranchInput;
};


export type MutationCreateClusterAgentArgs = {
  input: CreateClusterAgentInput;
};


export type MutationCreateCustomEmojiArgs = {
  input: CreateCustomEmojiInput;
};


export type MutationCreateDiffNoteArgs = {
  input: CreateDiffNoteInput;
};


export type MutationCreateImageDiffNoteArgs = {
  input: CreateImageDiffNoteInput;
};


export type MutationCreateIssueArgs = {
  input: CreateIssueInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreateSnippetArgs = {
  input: CreateSnippetInput;
};


export type MutationCustomerRelationsContactCreateArgs = {
  input: CustomerRelationsContactCreateInput;
};


export type MutationCustomerRelationsContactUpdateArgs = {
  input: CustomerRelationsContactUpdateInput;
};


export type MutationCustomerRelationsOrganizationCreateArgs = {
  input: CustomerRelationsOrganizationCreateInput;
};


export type MutationCustomerRelationsOrganizationUpdateArgs = {
  input: CustomerRelationsOrganizationUpdateInput;
};


export type MutationDeleteAnnotationArgs = {
  input: DeleteAnnotationInput;
};


export type MutationDesignManagementDeleteArgs = {
  input: DesignManagementDeleteInput;
};


export type MutationDesignManagementMoveArgs = {
  input: DesignManagementMoveInput;
};


export type MutationDesignManagementUploadArgs = {
  input: DesignManagementUploadInput;
};


export type MutationDestroyBoardArgs = {
  input: DestroyBoardInput;
};


export type MutationDestroyBoardListArgs = {
  input: DestroyBoardListInput;
};


export type MutationDestroyContainerRepositoryArgs = {
  input: DestroyContainerRepositoryInput;
};


export type MutationDestroyContainerRepositoryTagsArgs = {
  input: DestroyContainerRepositoryTagsInput;
};


export type MutationDestroyCustomEmojiArgs = {
  input: DestroyCustomEmojiInput;
};


export type MutationDestroyNoteArgs = {
  input: DestroyNoteInput;
};


export type MutationDestroyPackageArgs = {
  input: DestroyPackageInput;
};


export type MutationDestroyPackageFileArgs = {
  input: DestroyPackageFileInput;
};


export type MutationDestroyPackageFilesArgs = {
  input: DestroyPackageFilesInput;
};


export type MutationDestroySnippetArgs = {
  input: DestroySnippetInput;
};


export type MutationDiscussionToggleResolveArgs = {
  input: DiscussionToggleResolveInput;
};


export type MutationEchoCreateArgs = {
  input: EchoCreateInput;
};


export type MutationEnvironmentsCanaryIngressUpdateArgs = {
  input: EnvironmentsCanaryIngressUpdateInput;
};


export type MutationGroupUpdateArgs = {
  input: GroupUpdateInput;
};


export type MutationHttpIntegrationCreateArgs = {
  input: HttpIntegrationCreateInput;
};


export type MutationHttpIntegrationDestroyArgs = {
  input: HttpIntegrationDestroyInput;
};


export type MutationHttpIntegrationResetTokenArgs = {
  input: HttpIntegrationResetTokenInput;
};


export type MutationHttpIntegrationUpdateArgs = {
  input: HttpIntegrationUpdateInput;
};


export type MutationIssueMoveArgs = {
  input: IssueMoveInput;
};


export type MutationIssueMoveListArgs = {
  input: IssueMoveListInput;
};


export type MutationIssueSetAssigneesArgs = {
  input: IssueSetAssigneesInput;
};


export type MutationIssueSetConfidentialArgs = {
  input: IssueSetConfidentialInput;
};


export type MutationIssueSetCrmContactsArgs = {
  input: IssueSetCrmContactsInput;
};


export type MutationIssueSetDueDateArgs = {
  input: IssueSetDueDateInput;
};


export type MutationIssueSetEscalationStatusArgs = {
  input: IssueSetEscalationStatusInput;
};


export type MutationIssueSetLockedArgs = {
  input: IssueSetLockedInput;
};


export type MutationIssueSetSeverityArgs = {
  input: IssueSetSeverityInput;
};


export type MutationIssueSetSubscriptionArgs = {
  input: IssueSetSubscriptionInput;
};


export type MutationJiraImportStartArgs = {
  input: JiraImportStartInput;
};


export type MutationJiraImportUsersArgs = {
  input: JiraImportUsersInput;
};


export type MutationJobCancelArgs = {
  input: JobCancelInput;
};


export type MutationJobPlayArgs = {
  input: JobPlayInput;
};


export type MutationJobRetryArgs = {
  input: JobRetryInput;
};


export type MutationJobUnscheduleArgs = {
  input: JobUnscheduleInput;
};


export type MutationLabelCreateArgs = {
  input: LabelCreateInput;
};


export type MutationMarkAsSpamSnippetArgs = {
  input: MarkAsSpamSnippetInput;
};


export type MutationMergeRequestAcceptArgs = {
  input: MergeRequestAcceptInput;
};


export type MutationMergeRequestCreateArgs = {
  input: MergeRequestCreateInput;
};


export type MutationMergeRequestReviewerRereviewArgs = {
  input: MergeRequestReviewerRereviewInput;
};


export type MutationMergeRequestSetAssigneesArgs = {
  input: MergeRequestSetAssigneesInput;
};


export type MutationMergeRequestSetDraftArgs = {
  input: MergeRequestSetDraftInput;
};


export type MutationMergeRequestSetLabelsArgs = {
  input: MergeRequestSetLabelsInput;
};


export type MutationMergeRequestSetLockedArgs = {
  input: MergeRequestSetLockedInput;
};


export type MutationMergeRequestSetMilestoneArgs = {
  input: MergeRequestSetMilestoneInput;
};


export type MutationMergeRequestSetSubscriptionArgs = {
  input: MergeRequestSetSubscriptionInput;
};


export type MutationMergeRequestUpdateArgs = {
  input: MergeRequestUpdateInput;
};


export type MutationPagesMarkOnboardingCompleteArgs = {
  input: PagesMarkOnboardingCompleteInput;
};


export type MutationPipelineCancelArgs = {
  input: PipelineCancelInput;
};


export type MutationPipelineDestroyArgs = {
  input: PipelineDestroyInput;
};


export type MutationPipelineRetryArgs = {
  input: PipelineRetryInput;
};


export type MutationProjectCiCdSettingsUpdateArgs = {
  input: ProjectCiCdSettingsUpdateInput;
};


export type MutationPrometheusIntegrationCreateArgs = {
  input: PrometheusIntegrationCreateInput;
};


export type MutationPrometheusIntegrationResetTokenArgs = {
  input: PrometheusIntegrationResetTokenInput;
};


export type MutationPrometheusIntegrationUpdateArgs = {
  input: PrometheusIntegrationUpdateInput;
};


export type MutationReleaseAssetLinkCreateArgs = {
  input: ReleaseAssetLinkCreateInput;
};


export type MutationReleaseAssetLinkDeleteArgs = {
  input: ReleaseAssetLinkDeleteInput;
};


export type MutationReleaseAssetLinkUpdateArgs = {
  input: ReleaseAssetLinkUpdateInput;
};


export type MutationReleaseCreateArgs = {
  input: ReleaseCreateInput;
};


export type MutationReleaseDeleteArgs = {
  input: ReleaseDeleteInput;
};


export type MutationReleaseUpdateArgs = {
  input: ReleaseUpdateInput;
};


export type MutationRepositionImageDiffNoteArgs = {
  input: RepositionImageDiffNoteInput;
};


export type MutationRunnerDeleteArgs = {
  input: RunnerDeleteInput;
};


export type MutationRunnerUpdateArgs = {
  input: RunnerUpdateInput;
};


export type MutationRunnersRegistrationTokenResetArgs = {
  input: RunnersRegistrationTokenResetInput;
};


export type MutationSavedReplyCreateArgs = {
  input: SavedReplyCreateInput;
};


export type MutationSavedReplyDestroyArgs = {
  input: SavedReplyDestroyInput;
};


export type MutationSavedReplyUpdateArgs = {
  input: SavedReplyUpdateInput;
};


export type MutationTerraformStateDeleteArgs = {
  input: TerraformStateDeleteInput;
};


export type MutationTerraformStateLockArgs = {
  input: TerraformStateLockInput;
};


export type MutationTerraformStateUnlockArgs = {
  input: TerraformStateUnlockInput;
};


export type MutationTimelineEventCreateArgs = {
  input: TimelineEventCreateInput;
};


export type MutationTimelineEventDestroyArgs = {
  input: TimelineEventDestroyInput;
};


export type MutationTimelineEventPromoteFromNoteArgs = {
  input: TimelineEventPromoteFromNoteInput;
};


export type MutationTimelineEventUpdateArgs = {
  input: TimelineEventUpdateInput;
};


export type MutationTimelogCreateArgs = {
  input: TimelogCreateInput;
};


export type MutationTimelogDeleteArgs = {
  input: TimelogDeleteInput;
};


export type MutationTodoCreateArgs = {
  input: TodoCreateInput;
};


export type MutationTodoMarkDoneArgs = {
  input: TodoMarkDoneInput;
};


export type MutationTodoRestoreArgs = {
  input: TodoRestoreInput;
};


export type MutationTodoRestoreManyArgs = {
  input: TodoRestoreManyInput;
};


export type MutationTodosMarkAllDoneArgs = {
  input: TodosMarkAllDoneInput;
};


export type MutationUpdateAlertStatusArgs = {
  input: UpdateAlertStatusInput;
};


export type MutationUpdateBoardArgs = {
  input: UpdateBoardInput;
};


export type MutationUpdateBoardListArgs = {
  input: UpdateBoardListInput;
};


export type MutationUpdateContainerExpirationPolicyArgs = {
  input: UpdateContainerExpirationPolicyInput;
};


export type MutationUpdateDependencyProxyImageTtlGroupPolicyArgs = {
  input: UpdateDependencyProxyImageTtlGroupPolicyInput;
};


export type MutationUpdateDependencyProxySettingsArgs = {
  input: UpdateDependencyProxySettingsInput;
};


export type MutationUpdateImageDiffNoteArgs = {
  input: UpdateImageDiffNoteInput;
};


export type MutationUpdateIssueArgs = {
  input: UpdateIssueInput;
};


export type MutationUpdateNamespacePackageSettingsArgs = {
  input: UpdateNamespacePackageSettingsInput;
};


export type MutationUpdateNoteArgs = {
  input: UpdateNoteInput;
};


export type MutationUpdatePackagesCleanupPolicyArgs = {
  input: UpdatePackagesCleanupPolicyInput;
};


export type MutationUpdateSnippetArgs = {
  input: UpdateSnippetInput;
};


export type MutationUploadDeleteArgs = {
  input: UploadDeleteInput;
};


export type MutationUserCalloutCreateArgs = {
  input: UserCalloutCreateInput;
};


export type MutationUserPreferencesUpdateArgs = {
  input: UserPreferencesUpdateInput;
};


export type MutationWorkItemCreateArgs = {
  input: WorkItemCreateInput;
};


export type MutationWorkItemCreateFromTaskArgs = {
  input: WorkItemCreateFromTaskInput;
};


export type MutationWorkItemDeleteArgs = {
  input: WorkItemDeleteInput;
};


export type MutationWorkItemDeleteTaskArgs = {
  input: WorkItemDeleteTaskInput;
};


export type MutationWorkItemUpdateArgs = {
  input: WorkItemUpdateInput;
};


export type MutationWorkItemUpdateTaskArgs = {
  input: WorkItemUpdateTaskInput;
};


export type MutationWorkItemUpdateWidgetsArgs = {
  input: WorkItemUpdateWidgetsInput;
};

/** Different toggles for changing mutator behavior */
export type MutationOperationMode =
  /** Performs an append operation. */
  | 'APPEND'
  /** Performs a removal operation. */
  | 'REMOVE'
  /** Performs a replace operation. */
  | 'REPLACE';

export type Namespace = {
  __typename?: 'Namespace';
  /** Indicates if the cross_project_pipeline feature is available for the namespace. */
  crossProjectPipelineAvailable: Scalars['Boolean'];
  /** Description of the namespace. */
  description?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `description` */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** Full name of the namespace. */
  fullName: Scalars['String'];
  /** Full path of the namespace. */
  fullPath: Scalars['ID'];
  /** ID of the namespace. */
  id: Scalars['ID'];
  /** Indicates if Large File Storage (LFS) is enabled for namespace. */
  lfsEnabled?: Maybe<Scalars['Boolean']>;
  /** Name of the namespace. */
  name: Scalars['String'];
  /** Package settings for the namespace. */
  packageSettings?: Maybe<PackageSettings>;
  /** Path of the namespace. */
  path: Scalars['String'];
  /** Projects within this namespace. */
  projects: ProjectConnection;
  /** Indicates if users can request access to namespace. */
  requestAccessEnabled?: Maybe<Scalars['Boolean']>;
  /** Aggregated storage statistics of the namespace. Only available for root namespaces. */
  rootStorageStatistics?: Maybe<RootStorageStatistics>;
  /** Shared runners availability for the namespace and its descendants. */
  sharedRunnersSetting?: Maybe<SharedRunnersSetting>;
  /**
   * Timelog categories for the namespace. Available only when feature flag
   * `timelog_categories` is enabled. This flag is disabled by default, because the
   * feature is experimental and is subject to change without notice.
   */
  timelogCategories?: Maybe<TimeTrackingTimelogCategoryConnection>;
  /** Visibility of the namespace. */
  visibility?: Maybe<Scalars['String']>;
};


export type NamespaceProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  includeSubgroups?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<NamespaceProjectSort>;
};


export type NamespaceTimelogCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Values for sorting projects */
export type NamespaceProjectSort =
  /** Most similar to the search query. */
  | 'SIMILARITY'
  /** Sort by storage size. */
  | 'STORAGE';

export type NegatedBoardIssueInput = {
  /** Filter by assignee username. */
  assigneeUsername?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter by author username. */
  authorUsername?: InputMaybe<Scalars['String']>;
  /** List of IIDs of issues. For example `["1", "2"]`. */
  iids?: InputMaybe<Array<Scalars['String']>>;
  /** Filter by label name. */
  labelName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter by milestone title. */
  milestoneTitle?: InputMaybe<Scalars['String']>;
  /** Filter by milestone ID wildcard. */
  milestoneWildcardId?: InputMaybe<MilestoneWildcardId>;
  /** Filter by reaction emoji applied by the current user. Wildcard values "NONE" and "ANY" are supported. */
  myReactionEmoji?: InputMaybe<Scalars['String']>;
  /** Filter by release tag. */
  releaseTag?: InputMaybe<Scalars['String']>;
  /** Filter by the given issue types. */
  types?: InputMaybe<Array<IssueType>>;
};

export type NegatedIssueFilterInput = {
  /** ID of a user not assigned to the issues. */
  assigneeId?: InputMaybe<Scalars['String']>;
  /** Usernames of users not assigned to the issue. */
  assigneeUsernames?: InputMaybe<Array<Scalars['String']>>;
  /** Username of a user who didn't author the issue. */
  authorUsername?: InputMaybe<Scalars['String']>;
  /** List of IIDs of issues to exclude. For example, `[1, 2]`. */
  iids?: InputMaybe<Array<Scalars['String']>>;
  /** Labels not applied to this issue. */
  labelName?: InputMaybe<Array<Scalars['String']>>;
  /** Milestone not applied to this issue. */
  milestoneTitle?: InputMaybe<Array<Scalars['String']>>;
  /** Filter by negated milestone wildcard values. */
  milestoneWildcardId?: InputMaybe<NegatedMilestoneWildcardId>;
  /** Filter by reaction emoji applied by the current user. */
  myReactionEmoji?: InputMaybe<Scalars['String']>;
  /** Release tag not associated with the issue's milestone. Ignored when parent is a group. */
  releaseTag?: InputMaybe<Array<Scalars['String']>>;
  /** Filters out issues by the given issue types. */
  types?: InputMaybe<Array<IssueType>>;
};

/** Negated Milestone ID wildcard values */
export type NegatedMilestoneWildcardId =
  /** Milestone assigned is open and yet to be started (start date > today). */
  | 'STARTED'
  /** Milestone assigned is open but due in the past (due date <= today). */
  | 'UPCOMING';

export type Note = ResolvableInterface & {
  __typename?: 'Note';
  /** User who wrote this note. */
  author: UserCore;
  /** Content of the note. */
  body: Scalars['String'];
  /** The GitLab Flavored Markdown rendering of `note` */
  bodyHtml?: Maybe<Scalars['String']>;
  /** Indicates if this note is confidential. */
  confidential?: Maybe<Scalars['Boolean']>;
  /** Timestamp of the note creation. */
  createdAt: Scalars['Time'];
  /** Discussion this note is a part of. */
  discussion?: Maybe<Discussion>;
  /** ID of the note. */
  id: Scalars['NoteID'];
  /** Position of this note on a diff. */
  position?: Maybe<DiffPosition>;
  /** Project associated with the note. */
  project?: Maybe<Project>;
  /** Indicates if the object can be resolved. */
  resolvable: Scalars['Boolean'];
  /** Indicates if the object is resolved. */
  resolved: Scalars['Boolean'];
  /** Timestamp of when the object was resolved. */
  resolvedAt?: Maybe<Scalars['Time']>;
  /** User who resolved the object. */
  resolvedBy?: Maybe<UserCore>;
  /** Indicates whether this note was created by the system or by a user. */
  system: Scalars['Boolean'];
  /** Name of the icon corresponding to a system note. */
  systemNoteIconName?: Maybe<Scalars['String']>;
  /** Timestamp of the note's last activity. */
  updatedAt: Scalars['Time'];
  /** URL to view this Note in the Web UI. */
  url?: Maybe<Scalars['String']>;
  /** Permissions for the current user on the resource */
  userPermissions: NotePermissions;
};

/** The connection type for Note. */
export type NoteConnection = {
  __typename?: 'NoteConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<NoteEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Note>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type NoteEdge = {
  __typename?: 'NoteEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Note>;
};

export type NotePermissions = {
  __typename?: 'NotePermissions';
  /** Indicates the user can perform `admin_note` on this resource */
  adminNote: Scalars['Boolean'];
  /** Indicates the user can perform `award_emoji` on this resource */
  awardEmoji: Scalars['Boolean'];
  /** Indicates the user can perform `create_note` on this resource */
  createNote: Scalars['Boolean'];
  /** Indicates the user can perform `read_note` on this resource */
  readNote: Scalars['Boolean'];
  /** Indicates the user can perform `reposition_note` on this resource */
  repositionNote: Scalars['Boolean'];
  /** Indicates the user can perform `resolve_note` on this resource */
  resolveNote: Scalars['Boolean'];
};

export type NoteableInterface = {
  /** All discussions on this noteable. */
  discussions: DiscussionConnection;
  /** All notes on this noteable. */
  notes: NoteConnection;
};


export type NoteableInterfaceDiscussionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type NoteableInterfaceNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Represents an object that supports notes. */
export type NoteableType = Design | Issue | MergeRequest;

/** Nuget dependency link metadata */
export type NugetDependencyLinkMetadata = {
  __typename?: 'NugetDependencyLinkMetadata';
  /** ID of the metadatum. */
  id: Scalars['PackagesNugetDependencyLinkMetadatumID'];
  /** Target framework of the dependency link package. */
  targetFramework: Scalars['String'];
};

/** Nuget metadata */
export type NugetMetadata = {
  __typename?: 'NugetMetadata';
  /** Icon URL of the Nuget package. */
  iconUrl?: Maybe<Scalars['String']>;
  /** ID of the metadatum. */
  id: Scalars['PackagesNugetMetadatumID'];
  /** License URL of the Nuget package. */
  licenseUrl?: Maybe<Scalars['String']>;
  /** Project URL of the Nuget package. */
  projectUrl?: Maybe<Scalars['String']>;
};

/** Represents a package with pipelines in the Package Registry */
export type Package = {
  __typename?: 'Package';
  /** Whether the user can destroy the package. */
  canDestroy: Scalars['Boolean'];
  /** Date of creation. */
  createdAt: Scalars['Time'];
  /** ID of the package. */
  id: Scalars['PackagesPackageID'];
  /** Package metadata. */
  metadata?: Maybe<PackageMetadata>;
  /** Name of the package. */
  name: Scalars['String'];
  /** Package type. */
  packageType: PackageTypeEnum;
  /** Pipelines that built the package. Max page size 20. */
  pipelines?: Maybe<PipelineConnection>;
  /** Project where the package is stored. */
  project: Project;
  /** Package status. */
  status: PackageStatus;
  /** Package tags. */
  tags?: Maybe<PackageTagConnection>;
  /** Date of most recent update. */
  updatedAt: Scalars['Time'];
  /** Version string. */
  version?: Maybe<Scalars['String']>;
};


/** Represents a package with pipelines in the Package Registry */
export type PackagePipelinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a package with pipelines in the Package Registry */
export type PackageTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Represents a package in the Package Registry */
export type PackageBase = {
  __typename?: 'PackageBase';
  /** Whether the user can destroy the package. */
  canDestroy: Scalars['Boolean'];
  /** Date of creation. */
  createdAt: Scalars['Time'];
  /** ID of the package. */
  id: Scalars['PackagesPackageID'];
  /** Package metadata. */
  metadata?: Maybe<PackageMetadata>;
  /** Name of the package. */
  name: Scalars['String'];
  /** Package type. */
  packageType: PackageTypeEnum;
  /** Project where the package is stored. */
  project: Project;
  /** Package status. */
  status: PackageStatus;
  /** Package tags. */
  tags?: Maybe<PackageTagConnection>;
  /** Date of most recent update. */
  updatedAt: Scalars['Time'];
  /** Version string. */
  version?: Maybe<Scalars['String']>;
};


/** Represents a package in the Package Registry */
export type PackageBaseTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for PackageBase. */
export type PackageBaseConnection = {
  __typename?: 'PackageBaseConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PackageBaseEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PackageBase>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PackageBaseEdge = {
  __typename?: 'PackageBaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<PackageBase>;
};

/** Represents a composer JSON file */
export type PackageComposerJsonType = {
  __typename?: 'PackageComposerJsonType';
  /** License set in the Composer JSON file. */
  license?: Maybe<Scalars['String']>;
  /** Name set in the Composer JSON file. */
  name?: Maybe<Scalars['String']>;
  /** Type set in the Composer JSON file. */
  type?: Maybe<Scalars['String']>;
  /** Version set in the Composer JSON file. */
  version?: Maybe<Scalars['String']>;
};

/** The connection type for Package. */
export type PackageConnection = {
  __typename?: 'PackageConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PackageEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Package>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Represents a package dependency. */
export type PackageDependency = {
  __typename?: 'PackageDependency';
  /** ID of the dependency. */
  id: Scalars['PackagesDependencyID'];
  /** Name of the dependency. */
  name: Scalars['String'];
  /** Version pattern of the dependency. */
  versionPattern: Scalars['String'];
};

/** Represents a package dependency link */
export type PackageDependencyLink = {
  __typename?: 'PackageDependencyLink';
  /** Dependency. */
  dependency?: Maybe<PackageDependency>;
  /** Dependency type. */
  dependencyType: PackageDependencyType;
  /** ID of the dependency link. */
  id: Scalars['PackagesDependencyLinkID'];
  /** Dependency link metadata. */
  metadata?: Maybe<DependencyLinkMetadata>;
};

/** The connection type for PackageDependencyLink. */
export type PackageDependencyLinkConnection = {
  __typename?: 'PackageDependencyLinkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PackageDependencyLinkEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PackageDependencyLink>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PackageDependencyLinkEdge = {
  __typename?: 'PackageDependencyLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<PackageDependencyLink>;
};

export type PackageDependencyType =
  /** bundleDependencies dependency type */
  | 'BUNDLE_DEPENDENCIES'
  /** dependencies dependency type */
  | 'DEPENDENCIES'
  /** devDependencies dependency type */
  | 'DEV_DEPENDENCIES'
  /** peerDependencies dependency type */
  | 'PEER_DEPENDENCIES';

/** Represents a package details in the Package Registry */
export type PackageDetailsType = {
  __typename?: 'PackageDetailsType';
  /** Whether the user can destroy the package. */
  canDestroy: Scalars['Boolean'];
  /** Url of the Composer setup endpoint. */
  composerConfigRepositoryUrl?: Maybe<Scalars['String']>;
  /** Url of the Composer endpoint. */
  composerUrl?: Maybe<Scalars['String']>;
  /** Url of the Conan project endpoint. */
  conanUrl?: Maybe<Scalars['String']>;
  /** Date of creation. */
  createdAt: Scalars['Time'];
  /** Dependency link. */
  dependencyLinks?: Maybe<PackageDependencyLinkConnection>;
  /** ID of the package. */
  id: Scalars['PackagesPackageID'];
  /** Url of the Maven project endpoint. */
  mavenUrl?: Maybe<Scalars['String']>;
  /** Package metadata. */
  metadata?: Maybe<PackageMetadata>;
  /** Name of the package. */
  name: Scalars['String'];
  /** Url of the NPM project endpoint. */
  npmUrl?: Maybe<Scalars['String']>;
  /** Url of the Nuget project endpoint. */
  nugetUrl?: Maybe<Scalars['String']>;
  /** Package files. */
  packageFiles?: Maybe<PackageFileConnection>;
  /** Package type. */
  packageType: PackageTypeEnum;
  /** Pipelines that built the package. Max page size 20. */
  pipelines?: Maybe<PipelineConnection>;
  /** Project where the package is stored. */
  project: Project;
  /** Url of the PyPi project setup endpoint. */
  pypiSetupUrl?: Maybe<Scalars['String']>;
  /** Url of the PyPi project endpoint. */
  pypiUrl?: Maybe<Scalars['String']>;
  /** Package status. */
  status: PackageStatus;
  /** Package tags. */
  tags?: Maybe<PackageTagConnection>;
  /** Date of most recent update. */
  updatedAt: Scalars['Time'];
  /** Version string. */
  version?: Maybe<Scalars['String']>;
  /** Other versions of the package. */
  versions?: Maybe<PackageBaseConnection>;
};


/** Represents a package details in the Package Registry */
export type PackageDetailsTypeDependencyLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a package details in the Package Registry */
export type PackageDetailsTypePackageFilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a package details in the Package Registry */
export type PackageDetailsTypePipelinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a package details in the Package Registry */
export type PackageDetailsTypeTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a package details in the Package Registry */
export type PackageDetailsTypeVersionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type PackageEdge = {
  __typename?: 'PackageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Package>;
};

/** Represents a package file */
export type PackageFile = {
  __typename?: 'PackageFile';
  /** Created date. */
  createdAt: Scalars['Time'];
  /** Download path of the package file. */
  downloadPath: Scalars['String'];
  /** Md5 of the package file. */
  fileMd5?: Maybe<Scalars['String']>;
  /** File metadata. */
  fileMetadata?: Maybe<PackageFileMetadata>;
  /** Name of the package file. */
  fileName: Scalars['String'];
  /** Sha1 of the package file. */
  fileSha1?: Maybe<Scalars['String']>;
  /** Sha256 of the package file. */
  fileSha256?: Maybe<Scalars['String']>;
  /** ID of the file. */
  id: Scalars['PackagesPackageFileID'];
  /** Size of the package file. */
  size: Scalars['String'];
  /** Updated date. */
  updatedAt: Scalars['Time'];
};

/** The connection type for PackageFile. */
export type PackageFileConnection = {
  __typename?: 'PackageFileConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PackageFileEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PackageFile>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PackageFileEdge = {
  __typename?: 'PackageFileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<PackageFile>;
};

/** Represents metadata associated with a Package file */
export type PackageFileMetadata = {
  /** Date of creation. */
  createdAt: Scalars['Time'];
  /** Date of most recent update. */
  updatedAt: Scalars['Time'];
};

/** Values for sorting group packages */
export type PackageGroupSort =
  /** Ordered by created_at in ascending order. */
  | 'CREATED_ASC'
  /** Ordered by created_at in descending order. */
  | 'CREATED_DESC'
  /** Ordered by name in ascending order. */
  | 'NAME_ASC'
  /** Ordered by name in descending order. */
  | 'NAME_DESC'
  /** Ordered by project path in ascending order. */
  | 'PROJECT_PATH_ASC'
  /** Ordered by project path in descending order. */
  | 'PROJECT_PATH_DESC'
  /** Ordered by type in ascending order. */
  | 'TYPE_ASC'
  /** Ordered by type in descending order. */
  | 'TYPE_DESC'
  /** Ordered by version in ascending order. */
  | 'VERSION_ASC'
  /** Ordered by version in descending order. */
  | 'VERSION_DESC';

/** Represents a Helm dependency */
export type PackageHelmDependencyType = {
  __typename?: 'PackageHelmDependencyType';
  /** Alias of the dependency. */
  alias?: Maybe<Scalars['String']>;
  /** Condition of the dependency. */
  condition?: Maybe<Scalars['String']>;
  /** Indicates the dependency is enabled. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** Import-values of the dependency. */
  importValues?: Maybe<Array<Scalars['JSON']>>;
  /** Name of the dependency. */
  name?: Maybe<Scalars['String']>;
  /** Repository of the dependency. */
  repository?: Maybe<Scalars['String']>;
  /** Tags of the dependency. */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Version of the dependency. */
  version?: Maybe<Scalars['String']>;
};

/** Represents a Helm maintainer */
export type PackageHelmMaintainerType = {
  __typename?: 'PackageHelmMaintainerType';
  /** Email of the maintainer. */
  email?: Maybe<Scalars['String']>;
  /** Name of the maintainer. */
  name?: Maybe<Scalars['String']>;
  /** URL of the maintainer. */
  url?: Maybe<Scalars['String']>;
};

/** Represents the contents of a Helm Chart.yml file */
export type PackageHelmMetadataType = {
  __typename?: 'PackageHelmMetadataType';
  /** Annotations for the chart. */
  annotations?: Maybe<Scalars['JSON']>;
  /** API version of the chart. */
  apiVersion: Scalars['String'];
  /** App version of the chart. */
  appVersion?: Maybe<Scalars['String']>;
  /** Condition for the chart. */
  condition?: Maybe<Scalars['String']>;
  /** Dependencies of the chart. */
  dependencies?: Maybe<Array<PackageHelmDependencyType>>;
  /** Indicates if the chart is deprecated. */
  deprecated?: Maybe<Scalars['Boolean']>;
  /** Description of the chart. */
  description?: Maybe<Scalars['String']>;
  /** URL of the home page. */
  home?: Maybe<Scalars['String']>;
  /** URL to an SVG or PNG image for the chart. */
  icon?: Maybe<Scalars['String']>;
  /** Keywords for the chart. */
  keywords?: Maybe<Array<Scalars['String']>>;
  /** Kubernetes versions for the chart. */
  kubeVersion?: Maybe<Scalars['String']>;
  /** Maintainers of the chart. */
  maintainers?: Maybe<Array<PackageHelmMaintainerType>>;
  /** Name of the chart. */
  name: Scalars['String'];
  /** URLs of the source code for the chart. */
  sources?: Maybe<Array<Scalars['String']>>;
  /** Tags for the chart. */
  tags?: Maybe<Scalars['String']>;
  /** Type of the chart. */
  type?: Maybe<Scalars['String']>;
  /** Version of the chart. */
  version: Scalars['String'];
};

/** Represents metadata associated with a Package */
export type PackageMetadata = ComposerMetadata | ConanMetadata | MavenMetadata | NugetMetadata | PypiMetadata;

/** Namespace-level Package Registry settings */
export type PackageSettings = {
  __typename?: 'PackageSettings';
  /**
   * When generic_duplicates_allowed is false, you can publish duplicate packages
   * with names that match this regex. Otherwise, this setting has no effect.
   */
  genericDuplicateExceptionRegex?: Maybe<Scalars['UntrustedRegexp']>;
  /** Indicates whether duplicate generic packages are allowed for this namespace. */
  genericDuplicatesAllowed: Scalars['Boolean'];
  /**
   * When maven_duplicates_allowed is false, you can publish duplicate packages
   * with names that match this regex. Otherwise, this setting has no effect.
   */
  mavenDuplicateExceptionRegex?: Maybe<Scalars['UntrustedRegexp']>;
  /** Indicates whether duplicate Maven packages are allowed for this namespace. */
  mavenDuplicatesAllowed: Scalars['Boolean'];
};

/** Values for sorting package */
export type PackageSort =
  /** Ordered by created_at in ascending order. */
  | 'CREATED_ASC'
  /** Ordered by created_at in descending order. */
  | 'CREATED_DESC'
  /** Ordered by name in ascending order. */
  | 'NAME_ASC'
  /** Ordered by name in descending order. */
  | 'NAME_DESC'
  /** Ordered by type in ascending order. */
  | 'TYPE_ASC'
  /** Ordered by type in descending order. */
  | 'TYPE_DESC'
  /** Ordered by version in ascending order. */
  | 'VERSION_ASC'
  /** Ordered by version in descending order. */
  | 'VERSION_DESC';

export type PackageStatus =
  /** Packages with a default status */
  | 'DEFAULT'
  /** Packages with a error status */
  | 'ERROR'
  /** Packages with a hidden status */
  | 'HIDDEN'
  /** Packages with a pending_destruction status */
  | 'PENDING_DESTRUCTION'
  /** Packages with a processing status */
  | 'PROCESSING';

/** Represents a package tag */
export type PackageTag = {
  __typename?: 'PackageTag';
  /** Created date. */
  createdAt: Scalars['Time'];
  /** ID of the tag. */
  id: Scalars['ID'];
  /** Name of the tag. */
  name: Scalars['String'];
  /** Updated date. */
  updatedAt: Scalars['Time'];
};

/** The connection type for PackageTag. */
export type PackageTagConnection = {
  __typename?: 'PackageTagConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PackageTagEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PackageTag>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PackageTagEdge = {
  __typename?: 'PackageTagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<PackageTag>;
};

export type PackageTypeEnum =
  /** Packages from the Composer package manager */
  | 'COMPOSER'
  /** Packages from the Conan package manager */
  | 'CONAN'
  /** Packages from the Debian package manager */
  | 'DEBIAN'
  /** Packages from the Generic package manager */
  | 'GENERIC'
  /** Packages from the Golang package manager */
  | 'GOLANG'
  /** Packages from the Helm package manager */
  | 'HELM'
  /** Packages from the Maven package manager */
  | 'MAVEN'
  /** Packages from the npm package manager */
  | 'NPM'
  /** Packages from the Nuget package manager */
  | 'NUGET'
  /** Packages from the PyPI package manager */
  | 'PYPI'
  /** Packages from the Rubygems package manager */
  | 'RUBYGEMS'
  /** Packages from the Terraform Module package manager */
  | 'TERRAFORM_MODULE';

export type PackagesCleanupKeepDuplicatedPackageFilesEnum =
  /** Value to keep all package files */
  | 'ALL_PACKAGE_FILES'
  /** Value to keep 50 package files */
  | 'FIFTY_PACKAGE_FILES'
  /** Value to keep 40 package files */
  | 'FORTY_PACKAGE_FILES'
  /** Value to keep 1 package files */
  | 'ONE_PACKAGE_FILE'
  /** Value to keep 10 package files */
  | 'TEN_PACKAGE_FILES'
  /** Value to keep 30 package files */
  | 'THIRTY_PACKAGE_FILES'
  /** Value to keep 20 package files */
  | 'TWENTY_PACKAGE_FILES';

/** A packages cleanup policy designed to keep only packages and packages assets that matter most */
export type PackagesCleanupPolicy = {
  __typename?: 'PackagesCleanupPolicy';
  /** Number of duplicated package files to retain. */
  keepNDuplicatedPackageFiles: PackagesCleanupKeepDuplicatedPackageFilesEnum;
  /** Next time that this packages cleanup policy will be executed. */
  nextRunAt?: Maybe<Scalars['Time']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of PagesMarkOnboardingComplete */
export type PagesMarkOnboardingCompleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Full path of the project. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of PagesMarkOnboardingComplete */
export type PagesMarkOnboardingCompletePayload = {
  __typename?: 'PagesMarkOnboardingCompletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Indicates the new onboarding_complete state of the project's Pages metadata. */
  onboardingComplete: Scalars['Boolean'];
};

export type Pipeline = {
  __typename?: 'Pipeline';
  /** Indicates if the pipeline is active. */
  active: Scalars['Boolean'];
  /** Base SHA of the source branch. */
  beforeSha?: Maybe<Scalars['String']>;
  /** Specifies if a pipeline can be canceled. */
  cancelable: Scalars['Boolean'];
  /** Git commit of the pipeline. */
  commit?: Maybe<Commit>;
  /** Path to the commit that triggered the pipeline. */
  commitPath?: Maybe<Scalars['String']>;
  /** Timestamp of the pipeline's commit. */
  committedAt?: Maybe<Scalars['Time']>;
  /** Indicates if a pipeline is complete. */
  complete: Scalars['Boolean'];
  /**
   * Configuration source of the pipeline (UNKNOWN_SOURCE, REPOSITORY_SOURCE,
   * AUTO_DEVOPS_SOURCE, WEBIDE_SOURCE, REMOTE_SOURCE, EXTERNAL_PROJECT_SOURCE,
   * BRIDGE_SOURCE, PARAMETER_SOURCE, COMPLIANCE_SOURCE)
   */
  configSource?: Maybe<PipelineConfigSourceEnum>;
  /** Coverage percentage. */
  coverage?: Maybe<Scalars['Float']>;
  /** Timestamp of the pipeline's creation. */
  createdAt: Scalars['Time'];
  /** Detailed status of the pipeline. */
  detailedStatus: DetailedStatus;
  /** Pipelines this pipeline will trigger. */
  downstream?: Maybe<PipelineConnection>;
  /** Duration of the pipeline in seconds. */
  duration?: Maybe<Scalars['Int']>;
  /** Timestamp of the pipeline's completion. */
  finishedAt?: Maybe<Scalars['Time']>;
  /** ID of the pipeline. */
  id: Scalars['ID'];
  /** Internal ID of the pipeline. */
  iid: Scalars['String'];
  /** Specific job in this pipeline, either by name or ID. */
  job?: Maybe<CiJob>;
  /** Job artifacts of the pipeline. */
  jobArtifacts?: Maybe<Array<CiJobArtifact>>;
  /** Jobs belonging to the pipeline. */
  jobs?: Maybe<CiJobConnection>;
  /** Event type of the pipeline associated with a merge request. */
  mergeRequestEventType?: Maybe<PipelineMergeRequestEventType>;
  /** Relative path to the pipeline's page. */
  path?: Maybe<Scalars['String']>;
  /** Project the pipeline belongs to. */
  project?: Maybe<Project>;
  /** How long the pipeline was queued before starting. */
  queuedDuration?: Maybe<Scalars['Duration']>;
  /** Reference to the branch from which the pipeline was triggered. */
  ref?: Maybe<Scalars['String']>;
  /** Reference path to the branch from which the pipeline was triggered. */
  refPath?: Maybe<Scalars['String']>;
  /** Specifies if a pipeline can be retried. */
  retryable: Scalars['Boolean'];
  /** SHA of the pipeline's commit. */
  sha?: Maybe<Scalars['String']>;
  /** Job where pipeline was triggered from. */
  sourceJob?: Maybe<CiJob>;
  /** Stages of the pipeline. */
  stages?: Maybe<CiStageConnection>;
  /** Timestamp when the pipeline was started. */
  startedAt?: Maybe<Scalars['Time']>;
  /**
   * Status of the pipeline (CREATED, WAITING_FOR_RESOURCE, PREPARING, PENDING,
   * RUNNING, FAILED, SUCCESS, CANCELED, SKIPPED, MANUAL, SCHEDULED)
   */
  status: PipelineStatusEnum;
  /** Summary of the test report generated by the pipeline. */
  testReportSummary: TestReportSummary;
  /** A specific test suite in a pipeline test report. */
  testSuite?: Maybe<TestSuite>;
  /** Timestamp of the pipeline's last activity. */
  updatedAt: Scalars['Time'];
  /** Pipeline that triggered the pipeline. */
  upstream?: Maybe<Pipeline>;
  /** Pipeline user. */
  user?: Maybe<UserCore>;
  /** Permissions for the current user on the resource */
  userPermissions: PipelinePermissions;
  /** Indicates if the pipeline has jobs with `needs` dependencies. */
  usesNeeds?: Maybe<Scalars['Boolean']>;
  /** Pipeline warning messages. */
  warningMessages?: Maybe<Array<PipelineMessage>>;
  /** Indicates if a pipeline has warnings. */
  warnings: Scalars['Boolean'];
};


export type PipelineDownstreamArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PipelineJobArgs = {
  id?: InputMaybe<Scalars['JobID']>;
  name?: InputMaybe<Scalars['String']>;
};


export type PipelineJobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  retried?: InputMaybe<Scalars['Boolean']>;
  securityReportTypes?: InputMaybe<Array<SecurityReportTypeEnum>>;
  statuses?: InputMaybe<Array<CiJobStatus>>;
};


export type PipelineShaArgs = {
  format?: InputMaybe<ShaFormat>;
};


export type PipelineStagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PipelineTestSuiteArgs = {
  buildIds: Array<Scalars['ID']>;
};

export type PipelineAnalytics = {
  __typename?: 'PipelineAnalytics';
  /** Labels for the monthly pipeline count. */
  monthPipelinesLabels?: Maybe<Array<Scalars['String']>>;
  /** Total monthly successful pipeline count. */
  monthPipelinesSuccessful?: Maybe<Array<Scalars['Int']>>;
  /** Total monthly pipeline count. */
  monthPipelinesTotals?: Maybe<Array<Scalars['Int']>>;
  /** Pipeline times labels. */
  pipelineTimesLabels?: Maybe<Array<Scalars['String']>>;
  /** Pipeline times. */
  pipelineTimesValues?: Maybe<Array<Scalars['Int']>>;
  /** Labels for the weekly pipeline count. */
  weekPipelinesLabels?: Maybe<Array<Scalars['String']>>;
  /** Total weekly successful pipeline count. */
  weekPipelinesSuccessful?: Maybe<Array<Scalars['Int']>>;
  /** Total weekly pipeline count. */
  weekPipelinesTotals?: Maybe<Array<Scalars['Int']>>;
  /** Labels for the yearly pipeline count. */
  yearPipelinesLabels?: Maybe<Array<Scalars['String']>>;
  /** Total yearly successful pipeline count. */
  yearPipelinesSuccessful?: Maybe<Array<Scalars['Int']>>;
  /** Total yearly pipeline count. */
  yearPipelinesTotals?: Maybe<Array<Scalars['Int']>>;
};

/** Autogenerated input type of PipelineCancel */
export type PipelineCancelInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the pipeline to mutate. */
  id: Scalars['CiPipelineID'];
};

/** Autogenerated return type of PipelineCancel */
export type PipelineCancelPayload = {
  __typename?: 'PipelineCancelPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

export type PipelineConfigSourceEnum =
  /** Auto DevOps source. */
  | 'AUTO_DEVOPS_SOURCE'
  /** Bridge source. */
  | 'BRIDGE_SOURCE'
  /** Compliance source. */
  | 'COMPLIANCE_SOURCE'
  /** External project source. */
  | 'EXTERNAL_PROJECT_SOURCE'
  /** Parameter source. */
  | 'PARAMETER_SOURCE'
  /** Remote source. */
  | 'REMOTE_SOURCE'
  /** Repository source. */
  | 'REPOSITORY_SOURCE'
  /** Unknown source. */
  | 'UNKNOWN_SOURCE'
  /** Webide source. */
  | 'WEBIDE_SOURCE';

/** The connection type for Pipeline. */
export type PipelineConnection = {
  __typename?: 'PipelineConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PipelineEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Pipeline>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Represents pipeline counts for the project */
export type PipelineCounts = {
  __typename?: 'PipelineCounts';
  /** Total number of pipelines for the project. */
  all?: Maybe<Scalars['Int']>;
  /** Number of pipelines with scope FINISHED for the project */
  finished?: Maybe<Scalars['Int']>;
  /** Number of pipelines with scope PENDING for the project */
  pending?: Maybe<Scalars['Int']>;
  /** Number of pipelines with scope RUNNING for the project */
  running?: Maybe<Scalars['Int']>;
};

/** Autogenerated input type of PipelineDestroy */
export type PipelineDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the pipeline to mutate. */
  id: Scalars['CiPipelineID'];
};

/** Autogenerated return type of PipelineDestroy */
export type PipelineDestroyPayload = {
  __typename?: 'PipelineDestroyPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** An edge in a connection. */
export type PipelineEdge = {
  __typename?: 'PipelineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Pipeline>;
};

/** Event type of the pipeline associated with a merge request */
export type PipelineMergeRequestEventType =
  /** Pipeline run on the changes in the merge request source branch. */
  | 'DETACHED'
  /** Pipeline run on the changes from the source branch combined with the target branch. */
  | 'MERGED_RESULT';

export type PipelineMessage = {
  __typename?: 'PipelineMessage';
  /** Content of the pipeline message. */
  content: Scalars['String'];
  /** ID of the pipeline message. */
  id: Scalars['ID'];
};

export type PipelinePermissions = {
  __typename?: 'PipelinePermissions';
  /** Indicates the user can perform `admin_pipeline` on this resource */
  adminPipeline: Scalars['Boolean'];
  /** Indicates the user can perform `destroy_pipeline` on this resource */
  destroyPipeline: Scalars['Boolean'];
  /** Indicates the user can perform `update_pipeline` on this resource */
  updatePipeline: Scalars['Boolean'];
};

/** Autogenerated input type of PipelineRetry */
export type PipelineRetryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the pipeline to mutate. */
  id: Scalars['CiPipelineID'];
};

/** Autogenerated return type of PipelineRetry */
export type PipelineRetryPayload = {
  __typename?: 'PipelineRetryPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Pipeline after mutation. */
  pipeline?: Maybe<Pipeline>;
};

export type PipelineScopeEnum =
  /** Branches. */
  | 'BRANCHES'
  /** Pipeline has completed. */
  | 'FINISHED'
  /** Pipeline has not started running yet. */
  | 'PENDING'
  /** Pipeline is running. */
  | 'RUNNING'
  /** Tags. */
  | 'TAGS';

export type PipelineStatusEnum =
  /** Pipeline was canceled before completion. */
  | 'CANCELED'
  /** Pipeline has been created. */
  | 'CREATED'
  /** At least one stage of the pipeline failed. */
  | 'FAILED'
  /** Pipeline needs to be manually started. */
  | 'MANUAL'
  /** Pipeline has not started running yet. */
  | 'PENDING'
  /** Pipeline is preparing to run. */
  | 'PREPARING'
  /** Pipeline is running. */
  | 'RUNNING'
  /** Pipeline is scheduled to run. */
  | 'SCHEDULED'
  /** Pipeline was skipped. */
  | 'SKIPPED'
  /** Pipeline completed successfully. */
  | 'SUCCESS'
  /** A resource (for example, a runner) that the pipeline requires to run is unavailable. */
  | 'WAITING_FOR_RESOURCE';

export type Project = {
  __typename?: 'Project';
  /** Agent configurations defined by the project */
  agentConfigurations?: Maybe<AgentConfigurationConnection>;
  /** A single Alert Management alert of the project. */
  alertManagementAlert?: Maybe<AlertManagementAlert>;
  /** Counts of alerts by status for the project. */
  alertManagementAlertStatusCounts?: Maybe<AlertManagementAlertStatusCountsType>;
  /** Alert Management alerts of the project. */
  alertManagementAlerts?: Maybe<AlertManagementAlertConnection>;
  /** HTTP Integrations which can receive alerts for the project. */
  alertManagementHttpIntegrations?: Maybe<AlertManagementHttpIntegrationConnection>;
  /** Integrations which can receive alerts for the project. */
  alertManagementIntegrations?: Maybe<AlertManagementIntegrationConnection>;
  /**
   * If `only_allow_merge_if_pipeline_succeeds` is true, indicates if merge
   * requests of the project can also be merged with skipped jobs.
   */
  allowMergeOnSkippedPipeline?: Maybe<Scalars['Boolean']>;
  /** Indicates the archived status of the project. */
  archived?: Maybe<Scalars['Boolean']>;
  /** Indicates if issues referenced by merge requests and commits within the default branch are closed automatically. */
  autocloseReferencedIssues?: Maybe<Scalars['Boolean']>;
  /** URL to avatar image file of the project. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** A single board of the project. */
  board?: Maybe<Board>;
  /** Boards of the project. */
  boards?: Maybe<BoardConnection>;
  /** CI/CD settings for the project. */
  ciCdSettings?: Maybe<ProjectCiCdSetting>;
  /** Path of the CI configuration file. */
  ciConfigPathOrDefault: Scalars['String'];
  /** The CI Job Tokens scope of access. */
  ciJobTokenScope?: Maybe<CiJobTokenScopeType>;
  /** Find a single CI/CD template by name. */
  ciTemplate?: Maybe<CiTemplate>;
  /** List of the project's CI/CD variables. */
  ciVariables?: Maybe<CiProjectVariableConnection>;
  /** Find a single cluster agent by name. */
  clusterAgent?: Maybe<ClusterAgent>;
  /** Cluster agents associated with the project. */
  clusterAgents?: Maybe<ClusterAgentConnection>;
  /** Container expiration policy of the project. */
  containerExpirationPolicy?: Maybe<ContainerExpirationPolicy>;
  /** Indicates if Container Registry is enabled for the current user */
  containerRegistryEnabled?: Maybe<Scalars['Boolean']>;
  /** Container repositories of the project. */
  containerRepositories?: Maybe<ContainerRepositoryConnection>;
  /** Number of container repositories in the project. */
  containerRepositoriesCount: Scalars['Int'];
  /** Timestamp of the project creation. */
  createdAt?: Maybe<Scalars['Time']>;
  /** Short description of the project. */
  description?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `description` */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** A single environment of the project. */
  environment?: Maybe<Environment>;
  /** Environments of the project. */
  environments?: Maybe<EnvironmentConnection>;
  /** Number of times the project has been forked. */
  forksCount: Scalars['Int'];
  /** Full path of the project. */
  fullPath: Scalars['ID'];
  /** Grafana integration details for the project. */
  grafanaIntegration?: Maybe<GrafanaIntegration>;
  /** Group of the project. */
  group?: Maybe<Group>;
  /** URL to connect to the project via HTTPS. */
  httpUrlToRepo?: Maybe<Scalars['String']>;
  /** ID of the project. */
  id: Scalars['ID'];
  /** Status of import background job of the project. */
  importStatus?: Maybe<Scalars['String']>;
  /** Incident Management Timeline event associated with the incident. */
  incidentManagementTimelineEvent?: Maybe<TimelineEventType>;
  /** Incident Management Timeline events associated with the incident. */
  incidentManagementTimelineEvents?: Maybe<TimelineEventTypeConnection>;
  /** A single issue of the project. */
  issue?: Maybe<Issue>;
  /** Counts of issues by status for the project. */
  issueStatusCounts?: Maybe<IssueStatusCountsType>;
  /** Issues of the project. */
  issues?: Maybe<IssueConnection>;
  /** Indicates if Issues are enabled for the current user */
  issuesEnabled?: Maybe<Scalars['Boolean']>;
  /** Status of Jira import background job of the project. */
  jiraImportStatus?: Maybe<Scalars['String']>;
  /** Jira imports into the project. */
  jiraImports?: Maybe<JiraImportConnection>;
  /** Jobs of a project. This field can only be resolved for one project in any single request. */
  jobs?: Maybe<CiJobConnection>;
  /** Indicates if CI/CD pipeline jobs are enabled for the current user. */
  jobsEnabled?: Maybe<Scalars['Boolean']>;
  /** Label available on this project. */
  label?: Maybe<Label>;
  /** Labels available on this project. */
  labels?: Maybe<LabelConnection>;
  /** Timestamp of the project last activity. */
  lastActivityAt?: Maybe<Scalars['Time']>;
  /** Indicates if the project has Large File Storage (LFS) enabled. */
  lfsEnabled?: Maybe<Scalars['Boolean']>;
  /** Template used to create merge commit message in merge requests. */
  mergeCommitTemplate?: Maybe<Scalars['String']>;
  /** A single merge request of the project. */
  mergeRequest?: Maybe<MergeRequest>;
  /** Merge requests of the project. */
  mergeRequests?: Maybe<MergeRequestConnection>;
  /** Indicates if Merge Requests are enabled for the current user */
  mergeRequestsEnabled?: Maybe<Scalars['Boolean']>;
  /**
   * Indicates if no merge commits should be created and all merges should instead
   * be fast-forwarded, which means that merging is only allowed if the branch
   * could be fast-forwarded.
   */
  mergeRequestsFfOnlyEnabled?: Maybe<Scalars['Boolean']>;
  /** Milestones of the project. */
  milestones?: Maybe<MilestoneConnection>;
  /** Name of the project (without namespace). */
  name: Scalars['String'];
  /** Full name of the project with its namespace. */
  nameWithNamespace: Scalars['String'];
  /** Namespace of the project. */
  namespace?: Maybe<Namespace>;
  /** Indicates if merge requests of the project can only be merged when all the discussions are resolved. */
  onlyAllowMergeIfAllDiscussionsAreResolved?: Maybe<Scalars['Boolean']>;
  /** Indicates if merge requests of the project can only be merged with successful jobs. */
  onlyAllowMergeIfPipelineSucceeds?: Maybe<Scalars['Boolean']>;
  /** Number of open issues for the project. */
  openIssuesCount?: Maybe<Scalars['Int']>;
  /** Packages of the project. */
  packages?: Maybe<PackageConnection>;
  /** Packages cleanup policy for the project. */
  packagesCleanupPolicy?: Maybe<PackagesCleanupPolicy>;
  /** Path of the project. */
  path: Scalars['String'];
  /** Build pipeline of the project. */
  pipeline?: Maybe<Pipeline>;
  /** Pipeline analytics. */
  pipelineAnalytics?: Maybe<PipelineAnalytics>;
  /** Build pipeline counts of the project. */
  pipelineCounts?: Maybe<PipelineCounts>;
  /** Build pipelines of the project. */
  pipelines?: Maybe<PipelineConnection>;
  /**
   * Indicates if a link to create or view a merge request should display after a
   * push to Git repositories of the project from the command line.
   */
  printingMergeRequestLinkEnabled?: Maybe<Scalars['Boolean']>;
  /** Members of the project. */
  projectMembers?: Maybe<MemberInterfaceConnection>;
  /** Indicates if there is public access to pipelines and job details of the project, including output logs and artifacts. */
  publicJobs?: Maybe<Scalars['Boolean']>;
  /** List of recently visited boards of the project. Maximum size is 4. */
  recentIssueBoards?: Maybe<BoardConnection>;
  /** A single release of the project. */
  release?: Maybe<Release>;
  /** Releases of the project. */
  releases?: Maybe<ReleaseConnection>;
  /** Indicates if `Delete source branch` option should be enabled by default for all new merge requests of the project. */
  removeSourceBranchAfterMerge?: Maybe<Scalars['Boolean']>;
  /** Git repository of the project. */
  repository?: Maybe<Repository>;
  /** Indicates if users can request member access to the project. */
  requestAccessEnabled?: Maybe<Scalars['Boolean']>;
  /** SAST CI configuration for the project. */
  sastCiConfiguration?: Maybe<SastCiConfiguration>;
  /** Detailed version of a Sentry error on the project. */
  sentryDetailedError?: Maybe<SentryDetailedError>;
  /** Paginated collection of Sentry errors on the project. */
  sentryErrors?: Maybe<SentryErrorCollection>;
  /** E-mail address of the Service Desk. */
  serviceDeskAddress?: Maybe<Scalars['String']>;
  /** Indicates if the project has Service Desk enabled. */
  serviceDeskEnabled?: Maybe<Scalars['Boolean']>;
  /** Project services. */
  services?: Maybe<ServiceConnection>;
  /** Indicates if shared runners are enabled for the project. */
  sharedRunnersEnabled?: Maybe<Scalars['Boolean']>;
  /** Snippets of the project. */
  snippets?: Maybe<SnippetConnection>;
  /** Indicates if Snippets are enabled for the current user */
  snippetsEnabled?: Maybe<Scalars['Boolean']>;
  /** Template used to create squash commit message in merge requests. */
  squashCommitTemplate?: Maybe<Scalars['String']>;
  /** Indicates if `squashReadOnly` is enabled. */
  squashReadOnly: Scalars['Boolean'];
  /** URL to connect to the project via SSH. */
  sshUrlToRepo?: Maybe<Scalars['String']>;
  /** Number of times the project has been starred. */
  starCount: Scalars['Int'];
  /** Statistics of the project. */
  statistics?: Maybe<ProjectStatistics>;
  /** Commit message used to apply merge request suggestions. */
  suggestionCommitMessage?: Maybe<Scalars['String']>;
  /**
   * List of project topics (not Git tags). Deprecated in 13.12: Use `topics`.
   * @deprecated Use `topics`. Deprecated in 13.12.
   */
  tagList?: Maybe<Scalars['String']>;
  /** Find a single Terraform state by name. */
  terraformState?: Maybe<TerraformState>;
  /** Terraform states associated with the project. */
  terraformStates?: Maybe<TerraformStateConnection>;
  /**
   * Timelog categories for the project. Available only when feature flag
   * `timelog_categories` is enabled. This flag is disabled by default, because the
   * feature is experimental and is subject to change without notice.
   */
  timelogCategories?: Maybe<TimeTrackingTimelogCategoryConnection>;
  /** Time logged on issues and merge requests in the project. */
  timelogs?: Maybe<TimelogConnection>;
  /** List of project topics. */
  topics?: Maybe<Array<Scalars['String']>>;
  /** Permissions for the current user on the resource */
  userPermissions: ProjectPermissions;
  /** Visibility of the project. */
  visibility?: Maybe<Scalars['String']>;
  /** Web URL of the project. */
  webUrl?: Maybe<Scalars['String']>;
  /** Indicates if Wikis are enabled for the current user */
  wikiEnabled?: Maybe<Scalars['Boolean']>;
  /**
   * Work item types available to the project. Returns `null` if `work_items`
   * feature flag is disabled. This flag is disabled by default, because the
   * feature is experimental and is subject to change without notice.
   */
  workItemTypes?: Maybe<WorkItemTypeConnection>;
  /**
   * Work items of the project. Introduced in 15.1: This feature is in Alpha. It can be changed or removed at any time.
   * @deprecated This feature is in Alpha. It can be changed or removed at any time. Introduced in 15.1.
   */
  workItems?: Maybe<WorkItemConnection>;
};


export type ProjectAgentConfigurationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectAlertManagementAlertArgs = {
  assigneeUsername?: InputMaybe<Scalars['String']>;
  domain?: AlertManagementDomainFilter;
  iid?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<AlertManagementAlertSort>;
  statuses?: InputMaybe<Array<AlertManagementStatus>>;
};


export type ProjectAlertManagementAlertStatusCountsArgs = {
  assigneeUsername?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};


export type ProjectAlertManagementAlertsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  domain?: AlertManagementDomainFilter;
  first?: InputMaybe<Scalars['Int']>;
  iid?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<AlertManagementAlertSort>;
  statuses?: InputMaybe<Array<AlertManagementStatus>>;
};


export type ProjectAlertManagementHttpIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['AlertManagementHttpIntegrationID']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectAlertManagementIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['GlobalID']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectBoardArgs = {
  id: Scalars['BoardID'];
};


export type ProjectBoardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['BoardID']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectCiTemplateArgs = {
  name: Scalars['String'];
};


export type ProjectCiVariablesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectClusterAgentArgs = {
  name: Scalars['String'];
};


export type ProjectClusterAgentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectContainerRepositoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ContainerRepositorySort>;
};


export type ProjectEnvironmentArgs = {
  name?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  states?: InputMaybe<Array<Scalars['String']>>;
};


export type ProjectEnvironmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  states?: InputMaybe<Array<Scalars['String']>>;
};


export type ProjectIncidentManagementTimelineEventArgs = {
  id: Scalars['IncidentManagementTimelineEventID'];
  incidentId: Scalars['IssueID'];
};


export type ProjectIncidentManagementTimelineEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  incidentId: Scalars['IssueID'];
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectIssueArgs = {
  assigneeId?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  assigneeUsernames?: InputMaybe<Array<Scalars['String']>>;
  authorUsername?: InputMaybe<Scalars['String']>;
  closedAfter?: InputMaybe<Scalars['Time']>;
  closedBefore?: InputMaybe<Scalars['Time']>;
  confidential?: InputMaybe<Scalars['Boolean']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  crmContactId?: InputMaybe<Scalars['String']>;
  crmOrganizationId?: InputMaybe<Scalars['String']>;
  iid?: InputMaybe<Scalars['String']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labelName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  milestoneTitle?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  milestoneWildcardId?: InputMaybe<MilestoneWildcardId>;
  myReactionEmoji?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NegatedIssueFilterInput>;
  releaseTag?: InputMaybe<Array<Scalars['String']>>;
  releaseTagWildcardId?: InputMaybe<ReleaseTagWildcardId>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<IssueSort>;
  state?: InputMaybe<IssuableState>;
  types?: InputMaybe<Array<IssueType>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


export type ProjectIssueStatusCountsArgs = {
  assigneeId?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  assigneeUsernames?: InputMaybe<Array<Scalars['String']>>;
  authorUsername?: InputMaybe<Scalars['String']>;
  closedAfter?: InputMaybe<Scalars['Time']>;
  closedBefore?: InputMaybe<Scalars['Time']>;
  confidential?: InputMaybe<Scalars['Boolean']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  crmContactId?: InputMaybe<Scalars['String']>;
  crmOrganizationId?: InputMaybe<Scalars['String']>;
  iid?: InputMaybe<Scalars['String']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labelName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  milestoneTitle?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  milestoneWildcardId?: InputMaybe<MilestoneWildcardId>;
  myReactionEmoji?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NegatedIssueFilterInput>;
  releaseTag?: InputMaybe<Array<Scalars['String']>>;
  releaseTagWildcardId?: InputMaybe<ReleaseTagWildcardId>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<IssueType>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


export type ProjectIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeId?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  assigneeUsernames?: InputMaybe<Array<Scalars['String']>>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  closedAfter?: InputMaybe<Scalars['Time']>;
  closedBefore?: InputMaybe<Scalars['Time']>;
  confidential?: InputMaybe<Scalars['Boolean']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  crmContactId?: InputMaybe<Scalars['String']>;
  crmOrganizationId?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  iid?: InputMaybe<Scalars['String']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labelName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  milestoneTitle?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  milestoneWildcardId?: InputMaybe<MilestoneWildcardId>;
  myReactionEmoji?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NegatedIssueFilterInput>;
  releaseTag?: InputMaybe<Array<Scalars['String']>>;
  releaseTagWildcardId?: InputMaybe<ReleaseTagWildcardId>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<IssueSort>;
  state?: InputMaybe<IssuableState>;
  types?: InputMaybe<Array<IssueType>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


export type ProjectJiraImportsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectJobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  statuses?: InputMaybe<Array<CiJobStatus>>;
};


export type ProjectLabelArgs = {
  title: Scalars['String'];
};


export type ProjectLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeAncestorGroups?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
};


export type ProjectMergeRequestArgs = {
  iid: Scalars['String'];
};


export type ProjectMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


export type ProjectMilestonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  containingDate?: InputMaybe<Scalars['Time']>;
  endDate?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  includeAncestors?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  searchTitle?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MilestoneSort>;
  startDate?: InputMaybe<Scalars['Time']>;
  state?: InputMaybe<MilestoneStateEnum>;
  timeframe?: InputMaybe<Timeframe>;
  title?: InputMaybe<Scalars['String']>;
};


export type ProjectPackagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeVersionless?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  packageName?: InputMaybe<Scalars['String']>;
  packageType?: InputMaybe<PackageTypeEnum>;
  sort?: InputMaybe<PackageSort>;
  status?: InputMaybe<PackageStatus>;
};


export type ProjectPipelineArgs = {
  iid?: InputMaybe<Scalars['ID']>;
  sha?: InputMaybe<Scalars['String']>;
};


export type ProjectPipelineCountsArgs = {
  ref?: InputMaybe<Scalars['String']>;
  sha?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
};


export type ProjectPipelinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<PipelineScopeEnum>;
  sha?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PipelineStatusEnum>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
  username?: InputMaybe<Scalars['String']>;
};


export type ProjectProjectMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  relations?: InputMaybe<Array<ProjectMemberRelation>>;
  search?: InputMaybe<Scalars['String']>;
};


export type ProjectRecentIssueBoardsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectReleaseArgs = {
  tagName: Scalars['String'];
};


export type ProjectReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ReleaseSort>;
};


export type ProjectSentryDetailedErrorArgs = {
  id: Scalars['GitlabErrorTrackingDetailedErrorID'];
};


export type ProjectServicesArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<ServiceType>;
};


export type ProjectSnippetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['SnippetID']>>;
  last?: InputMaybe<Scalars['Int']>;
  visibility?: InputMaybe<VisibilityScopesEnum>;
};


export type ProjectTerraformStateArgs = {
  name: Scalars['String'];
};


export type ProjectTerraformStatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectTimelogCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type ProjectTimelogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Time']>;
  endTime?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['GroupID']>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  startDate?: InputMaybe<Scalars['Time']>;
  startTime?: InputMaybe<Scalars['Time']>;
  username?: InputMaybe<Scalars['String']>;
};


export type ProjectWorkItemTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  taskable?: InputMaybe<Scalars['Boolean']>;
};


export type ProjectWorkItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  iid?: InputMaybe<Scalars['String']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<WorkItemSort>;
  state?: InputMaybe<IssuableState>;
  types?: InputMaybe<Array<IssueType>>;
};

export type ProjectCiCdSetting = {
  __typename?: 'ProjectCiCdSetting';
  /** Indicates CI job tokens generated in this project have restricted access to resources. */
  jobTokenScopeEnabled?: Maybe<Scalars['Boolean']>;
  /** Whether to keep the latest builds artifacts. */
  keepLatestArtifact?: Maybe<Scalars['Boolean']>;
  /** Whether merge pipelines are enabled. */
  mergePipelinesEnabled?: Maybe<Scalars['Boolean']>;
  /** Whether merge trains are enabled. */
  mergeTrainsEnabled?: Maybe<Scalars['Boolean']>;
  /** Project the CI/CD settings belong to. */
  project?: Maybe<Project>;
};

/** Autogenerated input type of ProjectCiCdSettingsUpdate */
export type ProjectCiCdSettingsUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Full Path of the project the settings belong to. */
  fullPath: Scalars['ID'];
  /** Indicates CI job tokens generated in this project have restricted access to resources. */
  jobTokenScopeEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Indicates if the latest artifact should be kept for this project. */
  keepLatestArtifact?: InputMaybe<Scalars['Boolean']>;
};

/** Autogenerated return type of ProjectCiCdSettingsUpdate */
export type ProjectCiCdSettingsUpdatePayload = {
  __typename?: 'ProjectCiCdSettingsUpdatePayload';
  /** CI/CD settings after mutation. */
  ciCdSettings: ProjectCiCdSetting;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** The connection type for Project. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProjectEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Project>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Project>;
};

/** Represents a Project Membership */
export type ProjectMember = MemberInterface & {
  __typename?: 'ProjectMember';
  /** GitLab::Access level. */
  accessLevel?: Maybe<AccessLevel>;
  /** Date and time the membership was created. */
  createdAt?: Maybe<Scalars['Time']>;
  /** User that authorized membership. */
  createdBy?: Maybe<UserCore>;
  /** Date and time the membership expires. */
  expiresAt?: Maybe<Scalars['Time']>;
  /** ID of the member. */
  id: Scalars['ID'];
  /** Find a merge request. */
  mergeRequestInteraction?: Maybe<UserMergeRequestInteraction>;
  /** Project that User is a member of. */
  project?: Maybe<Project>;
  /** Date and time the membership was last updated. */
  updatedAt?: Maybe<Scalars['Time']>;
  /** User that is associated with the member object. */
  user?: Maybe<UserCore>;
  /** Permissions for the current user on the resource */
  userPermissions: ProjectPermissions;
};


/** Represents a Project Membership */
export type ProjectMemberMergeRequestInteractionArgs = {
  id: Scalars['MergeRequestID'];
};

/** The connection type for ProjectMember. */
export type ProjectMemberConnection = {
  __typename?: 'ProjectMemberConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProjectMemberEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ProjectMember>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProjectMemberEdge = {
  __typename?: 'ProjectMemberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ProjectMember>;
};

/** Project member relation */
export type ProjectMemberRelation =
  /** Descendants members */
  | 'DESCENDANTS'
  /** Direct members */
  | 'DIRECT'
  /** Inherited members */
  | 'INHERITED'
  /** Invited Groups members */
  | 'INVITED_GROUPS';

export type ProjectPermissions = {
  __typename?: 'ProjectPermissions';
  /** Indicates the user can perform `admin_operations` on this resource */
  adminOperations: Scalars['Boolean'];
  /** Indicates the user can perform `admin_project` on this resource */
  adminProject: Scalars['Boolean'];
  /** Indicates the user can perform `admin_remote_mirror` on this resource */
  adminRemoteMirror: Scalars['Boolean'];
  /** Indicates the user can perform `admin_wiki` on this resource */
  adminWiki: Scalars['Boolean'];
  /** Indicates the user can perform `archive_project` on this resource */
  archiveProject: Scalars['Boolean'];
  /** Indicates the user can perform `change_namespace` on this resource */
  changeNamespace: Scalars['Boolean'];
  /** Indicates the user can perform `change_visibility_level` on this resource */
  changeVisibilityLevel: Scalars['Boolean'];
  /** Indicates the user can perform `create_deployment` on this resource */
  createDeployment: Scalars['Boolean'];
  /** Indicates the user can perform `create_design` on this resource */
  createDesign: Scalars['Boolean'];
  /** Indicates the user can perform `create_issue` on this resource */
  createIssue: Scalars['Boolean'];
  /** Indicates the user can perform `create_label` on this resource */
  createLabel: Scalars['Boolean'];
  /** Indicates the user can perform `create_merge_request_from` on this resource */
  createMergeRequestFrom: Scalars['Boolean'];
  /** Indicates the user can perform `create_merge_request_in` on this resource */
  createMergeRequestIn: Scalars['Boolean'];
  /** Indicates the user can perform `create_pages` on this resource */
  createPages: Scalars['Boolean'];
  /** Indicates the user can perform `create_pipeline` on this resource */
  createPipeline: Scalars['Boolean'];
  /** Indicates the user can perform `create_pipeline_schedule` on this resource */
  createPipelineSchedule: Scalars['Boolean'];
  /** Indicates the user can perform `create_snippet` on this resource */
  createSnippet: Scalars['Boolean'];
  /** Indicates the user can perform `create_wiki` on this resource */
  createWiki: Scalars['Boolean'];
  /** Indicates the user can perform `destroy_design` on this resource */
  destroyDesign: Scalars['Boolean'];
  /** Indicates the user can perform `destroy_pages` on this resource */
  destroyPages: Scalars['Boolean'];
  /** Indicates the user can perform `destroy_wiki` on this resource */
  destroyWiki: Scalars['Boolean'];
  /** Indicates the user can perform `download_code` on this resource */
  downloadCode: Scalars['Boolean'];
  /** Indicates the user can perform `download_wiki_code` on this resource */
  downloadWikiCode: Scalars['Boolean'];
  /** Indicates the user can perform `fork_project` on this resource */
  forkProject: Scalars['Boolean'];
  /** Indicates the user can perform `push_code` on this resource */
  pushCode: Scalars['Boolean'];
  /** Indicates the user can perform `push_to_delete_protected_branch` on this resource */
  pushToDeleteProtectedBranch: Scalars['Boolean'];
  /** Indicates the user can perform `read_commit_status` on this resource */
  readCommitStatus: Scalars['Boolean'];
  /** Indicates the user can perform `read_cycle_analytics` on this resource */
  readCycleAnalytics: Scalars['Boolean'];
  /** Indicates the user can perform `read_design` on this resource */
  readDesign: Scalars['Boolean'];
  /** Indicates the user can perform `read_merge_request` on this resource */
  readMergeRequest: Scalars['Boolean'];
  /** Indicates the user can perform `read_pages_content` on this resource */
  readPagesContent: Scalars['Boolean'];
  /** Indicates the user can perform `read_project` on this resource */
  readProject: Scalars['Boolean'];
  /** Indicates the user can perform `read_project_member` on this resource */
  readProjectMember: Scalars['Boolean'];
  /** Indicates the user can perform `read_wiki` on this resource */
  readWiki: Scalars['Boolean'];
  /** Indicates the user can perform `remove_fork_project` on this resource */
  removeForkProject: Scalars['Boolean'];
  /** Indicates the user can perform `remove_pages` on this resource */
  removePages: Scalars['Boolean'];
  /** Indicates the user can perform `remove_project` on this resource */
  removeProject: Scalars['Boolean'];
  /** Indicates the user can perform `rename_project` on this resource */
  renameProject: Scalars['Boolean'];
  /** Indicates the user can perform `request_access` on this resource */
  requestAccess: Scalars['Boolean'];
  /** Indicates the user can perform `update_pages` on this resource */
  updatePages: Scalars['Boolean'];
  /** Indicates the user can perform `update_wiki` on this resource */
  updateWiki: Scalars['Boolean'];
  /** Indicates the user can perform `upload_file` on this resource */
  uploadFile: Scalars['Boolean'];
};

export type ProjectStatistics = {
  __typename?: 'ProjectStatistics';
  /** Build artifacts size of the project in bytes. */
  buildArtifactsSize: Scalars['Float'];
  /** Commit count of the project. */
  commitCount: Scalars['Float'];
  /** Container Registry size of the project in bytes. */
  containerRegistrySize?: Maybe<Scalars['Float']>;
  /** Large File Storage (LFS) object size of the project in bytes. */
  lfsObjectsSize: Scalars['Float'];
  /** Packages size of the project in bytes. */
  packagesSize: Scalars['Float'];
  /** CI Pipeline artifacts size in bytes. */
  pipelineArtifactsSize?: Maybe<Scalars['Float']>;
  /** Repository size of the project in bytes. */
  repositorySize: Scalars['Float'];
  /** Snippets size of the project in bytes. */
  snippetsSize?: Maybe<Scalars['Float']>;
  /** Storage size of the project in bytes. */
  storageSize: Scalars['Float'];
  /** Uploads size of the project in bytes. */
  uploadsSize?: Maybe<Scalars['Float']>;
  /** Wiki size of the project in bytes. */
  wikiSize?: Maybe<Scalars['Float']>;
};

/** The alert condition for Prometheus */
export type PrometheusAlert = {
  __typename?: 'PrometheusAlert';
  /** Human-readable text of the alert condition. */
  humanizedText: Scalars['String'];
  /** ID of the alert condition. */
  id: Scalars['ID'];
};

/** Autogenerated input type of PrometheusIntegrationCreate */
export type PrometheusIntegrationCreateInput = {
  /** Whether the integration is receiving alerts. */
  active: Scalars['Boolean'];
  /** Endpoint at which Prometheus can be queried. */
  apiUrl: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Project to create the integration in. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of PrometheusIntegrationCreate */
export type PrometheusIntegrationCreatePayload = {
  __typename?: 'PrometheusIntegrationCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Newly created integration. */
  integration?: Maybe<AlertManagementPrometheusIntegration>;
};

/** Autogenerated input type of PrometheusIntegrationResetToken */
export type PrometheusIntegrationResetTokenInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the integration to mutate. */
  id: Scalars['IntegrationsPrometheusID'];
};

/** Autogenerated return type of PrometheusIntegrationResetToken */
export type PrometheusIntegrationResetTokenPayload = {
  __typename?: 'PrometheusIntegrationResetTokenPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Newly created integration. */
  integration?: Maybe<AlertManagementPrometheusIntegration>;
};

/** Autogenerated input type of PrometheusIntegrationUpdate */
export type PrometheusIntegrationUpdateInput = {
  /** Whether the integration is receiving alerts. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** Endpoint at which Prometheus can be queried. */
  apiUrl?: InputMaybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the integration to mutate. */
  id: Scalars['IntegrationsPrometheusID'];
};

/** Autogenerated return type of PrometheusIntegrationUpdate */
export type PrometheusIntegrationUpdatePayload = {
  __typename?: 'PrometheusIntegrationUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Newly created integration. */
  integration?: Maybe<AlertManagementPrometheusIntegration>;
};

/** Pypi metadata */
export type PypiMetadata = {
  __typename?: 'PypiMetadata';
  /** ID of the metadatum. */
  id: Scalars['PackagesPypiMetadatumID'];
  /** Required Python version of the Pypi package. */
  requiredPython?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Find an issue board list. */
  boardList?: Maybe<BoardList>;
  /** CI related settings that apply to the entire instance. */
  ciApplicationSettings?: Maybe<CiApplicationSettings>;
  /**
   * Linted and processed contents of a CI config.
   * Should not be requested more than once per request.
   */
  ciConfig?: Maybe<CiConfig>;
  /** List of the instance's CI/CD variables. */
  ciVariables?: Maybe<CiInstanceVariableConnection>;
  /** Find a container repository. */
  containerRepository?: Maybe<ContainerRepositoryDetails>;
  /** Get information about current user. */
  currentUser?: Maybe<UserCore>;
  /** Fields related to design management. */
  designManagement: DesignManagement;
  /** Testing endpoint to validate the API with */
  echo: Scalars['String'];
  /** Whether Gitpod is enabled in application settings. */
  gitpodEnabled?: Maybe<Scalars['Boolean']>;
  /** Find a group. */
  group?: Maybe<Group>;
  /** Find an issue. */
  issue?: Maybe<Issue>;
  /** Find a merge request. */
  mergeRequest?: Maybe<MergeRequest>;
  /** Metadata about GitLab. */
  metadata?: Maybe<Metadata>;
  /** Find a milestone. */
  milestone?: Maybe<Milestone>;
  /** Find a namespace. */
  namespace?: Maybe<Namespace>;
  /** Find a package. */
  package?: Maybe<PackageDetailsType>;
  /** Find a project. */
  project?: Maybe<Project>;
  /** Find projects visible to the current user. */
  projects?: Maybe<ProjectConnection>;
  /** Information about the complexity of the GraphQL query. */
  queryComplexity?: Maybe<QueryComplexity>;
  /** Find a runner. */
  runner?: Maybe<CiRunner>;
  /** Supported runner platforms. */
  runnerPlatforms?: Maybe<RunnerPlatformConnection>;
  /** Runner setup instructions. */
  runnerSetup?: Maybe<RunnerSetup>;
  /** Find runners visible to the current user. */
  runners?: Maybe<CiRunnerConnection>;
  /** Find Snippets visible to the current user. */
  snippets?: Maybe<SnippetConnection>;
  /** Find timelogs visible to the current user. */
  timelogs?: Maybe<TimelogConnection>;
  /** Retrieve a single to-do item */
  todo?: Maybe<Todo>;
  /** Find project topics. */
  topics?: Maybe<TopicConnection>;
  /** Get statistics on the instance. */
  usageTrendsMeasurements?: Maybe<UsageTrendsMeasurementConnection>;
  /** Find a user. */
  user?: Maybe<UserCore>;
  /** Find users. */
  users?: Maybe<UserCoreConnection>;
  /**
   * Find a work item. Returns `null` if `work_items` feature flag is disabled.
   * Introduced in 15.1: This feature is in Alpha. It can be changed or removed at any time.
   * @deprecated This feature is in Alpha. It can be changed or removed at any time. Introduced in 15.1.
   */
  workItem?: Maybe<WorkItem>;
};


export type QueryBoardListArgs = {
  id: Scalars['ListID'];
  issueFilters?: InputMaybe<BoardIssueInput>;
};


export type QueryCiConfigArgs = {
  content: Scalars['String'];
  dryRun?: InputMaybe<Scalars['Boolean']>;
  projectPath: Scalars['ID'];
  sha?: InputMaybe<Scalars['String']>;
};


export type QueryCiVariablesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryContainerRepositoryArgs = {
  id: Scalars['ContainerRepositoryID'];
};


export type QueryEchoArgs = {
  text: Scalars['String'];
};


export type QueryGroupArgs = {
  fullPath: Scalars['ID'];
};


export type QueryIssueArgs = {
  id: Scalars['IssueID'];
};


export type QueryMergeRequestArgs = {
  id: Scalars['MergeRequestID'];
};


export type QueryMilestoneArgs = {
  id: Scalars['MilestoneID'];
};


export type QueryNamespaceArgs = {
  fullPath: Scalars['ID'];
};


export type QueryPackageArgs = {
  id: Scalars['PackagesPackageID'];
};


export type QueryProjectArgs = {
  fullPath: Scalars['ID'];
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
  membership?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  searchNamespaces?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  topics?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryRunnerArgs = {
  id: Scalars['CiRunnerID'];
};


export type QueryRunnerPlatformsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryRunnerSetupArgs = {
  architecture: Scalars['String'];
  groupId?: InputMaybe<Scalars['GroupID']>;
  platform: Scalars['String'];
  projectId?: InputMaybe<Scalars['ProjectID']>;
};


export type QueryRunnersArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  paused?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<CiRunnerSort>;
  status?: InputMaybe<CiRunnerStatus>;
  tagList?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<CiRunnerType>;
  upgradeStatus?: InputMaybe<CiRunnerUpgradeStatus>;
};


export type QuerySnippetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Scalars['UserID']>;
  before?: InputMaybe<Scalars['String']>;
  explore?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['SnippetID']>>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  type?: InputMaybe<TypeEnum>;
  visibility?: InputMaybe<VisibilityScopesEnum>;
};


export type QueryTimelogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Time']>;
  endTime?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['GroupID']>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  startDate?: InputMaybe<Scalars['Time']>;
  startTime?: InputMaybe<Scalars['Time']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryTodoArgs = {
  id: Scalars['TodoID'];
};


export type QueryTopicsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryUsageTrendsMeasurementsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  identifier: MeasurementIdentifier;
  last?: InputMaybe<Scalars['Int']>;
  recordedAfter?: InputMaybe<Scalars['Time']>;
  recordedBefore?: InputMaybe<Scalars['Time']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['UserID']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  admins?: InputMaybe<Scalars['Boolean']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Sort>;
  usernames?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryWorkItemArgs = {
  id: Scalars['WorkItemID'];
};

export type QueryComplexity = {
  __typename?: 'QueryComplexity';
  /** GraphQL query complexity limit. */
  limit?: Maybe<Scalars['Int']>;
  /** GraphQL query complexity score. */
  score?: Maybe<Scalars['Int']>;
};

/** Recent failure history of a test case. */
export type RecentFailures = {
  __typename?: 'RecentFailures';
  /** Name of the base branch of the project. */
  baseBranch?: Maybe<Scalars['String']>;
  /** Number of times the test case has failed in the past 14 days. */
  count?: Maybe<Scalars['Int']>;
};

/** Represents a release */
export type Release = {
  __typename?: 'Release';
  /** Assets of the release. */
  assets?: Maybe<ReleaseAssets>;
  /** User that created the release. */
  author?: Maybe<UserCore>;
  /** Commit associated with the release. */
  commit?: Maybe<Commit>;
  /** Timestamp of when the release was created. */
  createdAt?: Maybe<Scalars['Time']>;
  /** Description (also known as "release notes") of the release. */
  description?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `description` */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** Evidence for the release. */
  evidences?: Maybe<ReleaseEvidenceConnection>;
  /** Indicates the release is an historical release. */
  historicalRelease?: Maybe<Scalars['Boolean']>;
  /** Global ID of the release. */
  id: Scalars['ReleaseID'];
  /** Links of the release. */
  links?: Maybe<ReleaseLinks>;
  /** Milestones associated to the release. */
  milestones?: Maybe<MilestoneConnection>;
  /** Name of the release. */
  name?: Maybe<Scalars['String']>;
  /** Timestamp of when the release was released. */
  releasedAt?: Maybe<Scalars['Time']>;
  /** Name of the tag associated with the release. */
  tagName?: Maybe<Scalars['String']>;
  /** Relative web path to the tag associated with the release. */
  tagPath?: Maybe<Scalars['String']>;
  /** Indicates the release is an upcoming release. */
  upcomingRelease?: Maybe<Scalars['Boolean']>;
};


/** Represents a release */
export type ReleaseEvidencesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a release */
export type ReleaseMilestonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Represents an asset link associated with a release */
export type ReleaseAssetLink = {
  __typename?: 'ReleaseAssetLink';
  /** Relative path for the direct asset link. */
  directAssetPath?: Maybe<Scalars['String']>;
  /** Direct asset URL of the link. */
  directAssetUrl?: Maybe<Scalars['String']>;
  /** Indicates the link points to an external resource. */
  external?: Maybe<Scalars['Boolean']>;
  /** ID of the link. */
  id: Scalars['ID'];
  /** Type of the link: `other`, `runbook`, `image`, `package`; defaults to `other`. */
  linkType?: Maybe<ReleaseAssetLinkType>;
  /** Name of the link. */
  name?: Maybe<Scalars['String']>;
  /** URL of the link. */
  url?: Maybe<Scalars['String']>;
};

/** The connection type for ReleaseAssetLink. */
export type ReleaseAssetLinkConnection = {
  __typename?: 'ReleaseAssetLinkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReleaseAssetLinkEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ReleaseAssetLink>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of ReleaseAssetLinkCreate */
export type ReleaseAssetLinkCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Relative path for a direct asset link. */
  directAssetPath?: InputMaybe<Scalars['String']>;
  /** Type of the asset link. */
  linkType?: InputMaybe<ReleaseAssetLinkType>;
  /** Name of the asset link. */
  name: Scalars['String'];
  /** Full path of the project the asset link is associated with. */
  projectPath: Scalars['ID'];
  /** Name of the associated release's tag. */
  tagName: Scalars['String'];
  /** URL of the asset link. */
  url: Scalars['String'];
};

/** Autogenerated return type of ReleaseAssetLinkCreate */
export type ReleaseAssetLinkCreatePayload = {
  __typename?: 'ReleaseAssetLinkCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Asset link after mutation. */
  link?: Maybe<ReleaseAssetLink>;
};

/** Autogenerated input type of ReleaseAssetLinkDelete */
export type ReleaseAssetLinkDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the release asset link to delete. */
  id: Scalars['ReleasesLinkID'];
};

/** Autogenerated return type of ReleaseAssetLinkDelete */
export type ReleaseAssetLinkDeletePayload = {
  __typename?: 'ReleaseAssetLinkDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Deleted release asset link. */
  link?: Maybe<ReleaseAssetLink>;
};

/** An edge in a connection. */
export type ReleaseAssetLinkEdge = {
  __typename?: 'ReleaseAssetLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ReleaseAssetLink>;
};

/** Fields that are available when modifying a release asset link */
export type ReleaseAssetLinkInput = {
  /** Relative path for a direct asset link. */
  directAssetPath?: InputMaybe<Scalars['String']>;
  /** Type of the asset link. */
  linkType?: InputMaybe<ReleaseAssetLinkType>;
  /** Name of the asset link. */
  name: Scalars['String'];
  /** URL of the asset link. */
  url: Scalars['String'];
};

/** Type of the link: `other`, `runbook`, `image`, `package` */
export type ReleaseAssetLinkType =
  /** Image link type */
  | 'IMAGE'
  /** Other link type */
  | 'OTHER'
  /** Package link type */
  | 'PACKAGE'
  /** Runbook link type */
  | 'RUNBOOK';

/** Autogenerated input type of ReleaseAssetLinkUpdate */
export type ReleaseAssetLinkUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Relative path for a direct asset link. */
  directAssetPath?: InputMaybe<Scalars['String']>;
  /** ID of the release asset link to update. */
  id: Scalars['ReleasesLinkID'];
  /** Type of the asset link. */
  linkType?: InputMaybe<ReleaseAssetLinkType>;
  /** Name of the asset link. */
  name?: InputMaybe<Scalars['String']>;
  /** URL of the asset link. */
  url?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of ReleaseAssetLinkUpdate */
export type ReleaseAssetLinkUpdatePayload = {
  __typename?: 'ReleaseAssetLinkUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Asset link after mutation. */
  link?: Maybe<ReleaseAssetLink>;
};

/** A container for all assets associated with a release */
export type ReleaseAssets = {
  __typename?: 'ReleaseAssets';
  /** Number of assets of the release. */
  count?: Maybe<Scalars['Int']>;
  /** Asset links of the release. */
  links?: Maybe<ReleaseAssetLinkConnection>;
  /** Sources of the release. */
  sources?: Maybe<ReleaseSourceConnection>;
};


/** A container for all assets associated with a release */
export type ReleaseAssetsLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A container for all assets associated with a release */
export type ReleaseAssetsSourcesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Fields that are available when modifying release assets */
export type ReleaseAssetsInput = {
  /** List of asset links to associate to the release. */
  links?: InputMaybe<Array<ReleaseAssetLinkInput>>;
};

/** The connection type for Release. */
export type ReleaseConnection = {
  __typename?: 'ReleaseConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReleaseEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Release>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of ReleaseCreate */
export type ReleaseCreateInput = {
  /** Assets associated to the release. */
  assets?: InputMaybe<ReleaseAssetsInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Description (also known as "release notes") of the release. */
  description?: InputMaybe<Scalars['String']>;
  /** Title of each milestone the release is associated with. GitLab Premium customers can specify group milestones. */
  milestones?: InputMaybe<Array<Scalars['String']>>;
  /** Name of the release. */
  name?: InputMaybe<Scalars['String']>;
  /** Full path of the project the release is associated with. */
  projectPath: Scalars['ID'];
  /** Commit SHA or branch name to use if creating a new tag. */
  ref?: InputMaybe<Scalars['String']>;
  /** Date and time for the release. Defaults to the current date and time. */
  releasedAt?: InputMaybe<Scalars['Time']>;
  /** Message to use if creating a new annotated tag. */
  tagMessage?: InputMaybe<Scalars['String']>;
  /** Name of the tag to associate with the release. */
  tagName: Scalars['String'];
};

/** Autogenerated return type of ReleaseCreate */
export type ReleaseCreatePayload = {
  __typename?: 'ReleaseCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Release after mutation. */
  release?: Maybe<Release>;
};

/** Autogenerated input type of ReleaseDelete */
export type ReleaseDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Full path of the project the release is associated with. */
  projectPath: Scalars['ID'];
  /** Name of the tag associated with the release to delete. */
  tagName: Scalars['String'];
};

/** Autogenerated return type of ReleaseDelete */
export type ReleaseDeletePayload = {
  __typename?: 'ReleaseDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Deleted release. */
  release?: Maybe<Release>;
};

/** An edge in a connection. */
export type ReleaseEdge = {
  __typename?: 'ReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Release>;
};

/** Evidence for a release */
export type ReleaseEvidence = {
  __typename?: 'ReleaseEvidence';
  /** Timestamp when the evidence was collected. */
  collectedAt?: Maybe<Scalars['Time']>;
  /** URL from where the evidence can be downloaded. */
  filepath?: Maybe<Scalars['String']>;
  /** ID of the evidence. */
  id: Scalars['ID'];
  /** SHA1 ID of the evidence hash. */
  sha?: Maybe<Scalars['String']>;
};

/** The connection type for ReleaseEvidence. */
export type ReleaseEvidenceConnection = {
  __typename?: 'ReleaseEvidenceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReleaseEvidenceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ReleaseEvidence>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ReleaseEvidenceEdge = {
  __typename?: 'ReleaseEvidenceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ReleaseEvidence>;
};

export type ReleaseLinks = {
  __typename?: 'ReleaseLinks';
  /** HTTP URL of the issues page, filtered by this release and `state=closed`. */
  closedIssuesUrl?: Maybe<Scalars['String']>;
  /** HTTP URL of the merge request page , filtered by this release and `state=closed`. */
  closedMergeRequestsUrl?: Maybe<Scalars['String']>;
  /** HTTP URL of the release's edit page. */
  editUrl?: Maybe<Scalars['String']>;
  /** HTTP URL of the merge request page , filtered by this release and `state=merged`. */
  mergedMergeRequestsUrl?: Maybe<Scalars['String']>;
  /** HTTP URL of the issues page, filtered by this release and `state=open`. */
  openedIssuesUrl?: Maybe<Scalars['String']>;
  /** HTTP URL of the merge request page, filtered by this release and `state=open`. */
  openedMergeRequestsUrl?: Maybe<Scalars['String']>;
  /** HTTP URL of the release. */
  selfUrl?: Maybe<Scalars['String']>;
};

/** Values for sorting releases */
export type ReleaseSort =
  /** Created at ascending order. */
  | 'CREATED_ASC'
  /** Created at descending order. */
  | 'CREATED_DESC'
  /** Released at by ascending order. */
  | 'RELEASED_AT_ASC'
  /** Released at by descending order. */
  | 'RELEASED_AT_DESC';

/** Represents the source code attached to a release in a particular format */
export type ReleaseSource = {
  __typename?: 'ReleaseSource';
  /** Format of the source. */
  format?: Maybe<Scalars['String']>;
  /** Download URL of the source. */
  url?: Maybe<Scalars['String']>;
};

/** The connection type for ReleaseSource. */
export type ReleaseSourceConnection = {
  __typename?: 'ReleaseSourceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReleaseSourceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ReleaseSource>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ReleaseSourceEdge = {
  __typename?: 'ReleaseSourceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ReleaseSource>;
};

/** Release tag ID wildcard values */
export type ReleaseTagWildcardId =
  /** Release tag is assigned. */
  | 'ANY'
  /** No release tag is assigned. */
  | 'NONE';

/** Autogenerated input type of ReleaseUpdate */
export type ReleaseUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Description (release notes) of the release. */
  description?: InputMaybe<Scalars['String']>;
  /** Title of each milestone the release is associated with. GitLab Premium customers can specify group milestones. */
  milestones?: InputMaybe<Array<Scalars['String']>>;
  /** Name of the release. */
  name?: InputMaybe<Scalars['String']>;
  /** Full path of the project the release is associated with. */
  projectPath: Scalars['ID'];
  /** Release date. */
  releasedAt?: InputMaybe<Scalars['Time']>;
  /** Name of the tag associated with the release. */
  tagName: Scalars['String'];
};

/** Autogenerated return type of ReleaseUpdate */
export type ReleaseUpdatePayload = {
  __typename?: 'ReleaseUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Release after mutation. */
  release?: Maybe<Release>;
};

/** Autogenerated input type of RepositionImageDiffNote */
export type RepositionImageDiffNoteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the DiffNote to update. */
  id: Scalars['DiffNoteID'];
  /** Position of this note on a diff. */
  position: UpdateDiffImagePositionInput;
};

/** Autogenerated return type of RepositionImageDiffNote */
export type RepositionImageDiffNotePayload = {
  __typename?: 'RepositionImageDiffNotePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Note after mutation. */
  note?: Maybe<Note>;
};

export type Repository = {
  __typename?: 'Repository';
  /** Blobs contained within the repository */
  blobs?: Maybe<RepositoryBlobConnection>;
  /** Names of branches available in this repository that match the search pattern. */
  branchNames?: Maybe<Array<Scalars['String']>>;
  /** Shows a disk path of the repository. */
  diskPath?: Maybe<Scalars['String']>;
  /** Indicates repository has no visible content. */
  empty: Scalars['Boolean'];
  /** Indicates a corresponding Git repository exists on disk. */
  exists: Scalars['Boolean'];
  /** Paginated tree of the repository. */
  paginatedTree?: Maybe<TreeConnection>;
  /** Default branch of the repository. */
  rootRef?: Maybe<Scalars['String']>;
  /** Tree of the repository. */
  tree?: Maybe<Tree>;
};


export type RepositoryBlobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  paths: Array<Scalars['String']>;
  ref?: InputMaybe<Scalars['String']>;
};


export type RepositoryBranchNamesArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  searchPattern: Scalars['String'];
};


export type RepositoryPaginatedTreeArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  path?: InputMaybe<Scalars['String']>;
  recursive?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Scalars['String']>;
};


export type RepositoryTreeArgs = {
  path?: InputMaybe<Scalars['String']>;
  recursive?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Scalars['String']>;
};

export type RepositoryBlob = {
  __typename?: 'RepositoryBlob';
  /** Whether the current project is archived. */
  archived?: Maybe<Scalars['Boolean']>;
  /** Web path to blob blame page. */
  blamePath?: Maybe<Scalars['String']>;
  /** Whether the current user can push to the branch. */
  canCurrentUserPushToBranch?: Maybe<Scalars['Boolean']>;
  /** Whether the current user can modify the blob. */
  canModifyBlob?: Maybe<Scalars['Boolean']>;
  /** Web path for code navigation. */
  codeNavigationPath?: Maybe<Scalars['String']>;
  /** Web path to edit the blob in the old-style editor. */
  editBlobPath?: Maybe<Scalars['String']>;
  /** Web path to blob on an environment. */
  environmentExternalUrlForRouteMap?: Maybe<Scalars['String']>;
  /** Environment on which the blob is available. */
  environmentFormattedExternalUrl?: Maybe<Scalars['String']>;
  /** External storage being used, if enabled (for instance, 'LFS'). */
  externalStorage?: Maybe<Scalars['String']>;
  /** Web path to download the raw blob via external storage, if enabled. */
  externalStorageUrl?: Maybe<Scalars['String']>;
  /** Expected format of the blob based on the extension. */
  fileType?: Maybe<Scalars['String']>;
  /** Web path to find file. */
  findFilePath?: Maybe<Scalars['String']>;
  /** Web path to edit this blob using a forked project. */
  forkAndEditPath?: Maybe<Scalars['String']>;
  /** Web path to view this blob using a forked project. */
  forkAndViewPath?: Maybe<Scalars['String']>;
  /** URL to the blob within Gitpod. */
  gitpodBlobUrl?: Maybe<Scalars['String']>;
  /** Web path to blob history page. */
  historyPath?: Maybe<Scalars['String']>;
  /** ID of the blob. */
  id: Scalars['ID'];
  /** Web path to edit this blob in the Web IDE. */
  ideEditPath?: Maybe<Scalars['String']>;
  /** Web path to edit this blob in the Web IDE using a forked project. */
  ideForkAndEditPath?: Maybe<Scalars['String']>;
  /** Blob language. */
  language?: Maybe<Scalars['String']>;
  /** LFS OID of the blob. */
  lfsOid?: Maybe<Scalars['String']>;
  /** Blob mode. */
  mode?: Maybe<Scalars['String']>;
  /** Blob name. */
  name?: Maybe<Scalars['String']>;
  /** OID of the blob. */
  oid: Scalars['String'];
  /** Path of the blob. */
  path: Scalars['String'];
  /** Web path to blob permalink. */
  permalinkPath?: Maybe<Scalars['String']>;
  /** Web path to edit .gitlab-ci.yml file. */
  pipelineEditorPath?: Maybe<Scalars['String']>;
  /** Blob plain highlighted data. */
  plainData?: Maybe<Scalars['String']>;
  /** Web path for the root of the blob. */
  projectBlobPathRoot?: Maybe<Scalars['String']>;
  /** Raw content of the blob. */
  rawBlob?: Maybe<Scalars['String']>;
  /** Web path to download the raw blob. */
  rawPath?: Maybe<Scalars['String']>;
  /** Size (in bytes) of the blob, or the blob target if stored externally. */
  rawSize?: Maybe<Scalars['Int']>;
  /** Raw content of the blob, if the blob is text data. */
  rawTextBlob?: Maybe<Scalars['String']>;
  /** Web path to replace the blob content. */
  replacePath?: Maybe<Scalars['String']>;
  /** Blob content rich viewer. */
  richViewer?: Maybe<BlobViewer>;
  /** Blob content simple viewer. */
  simpleViewer: BlobViewer;
  /** Size (in bytes) of the blob. */
  size?: Maybe<Scalars['Int']>;
  /** Whether the blob's content is stored externally (for instance, in LFS). */
  storedExternally?: Maybe<Scalars['Boolean']>;
  /** Web path of the blob. */
  webPath?: Maybe<Scalars['String']>;
};

/** The connection type for RepositoryBlob. */
export type RepositoryBlobConnection = {
  __typename?: 'RepositoryBlobConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RepositoryBlobEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<RepositoryBlob>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RepositoryBlobEdge = {
  __typename?: 'RepositoryBlobEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<RepositoryBlob>;
};

export type ResolvableInterface = {
  /** Indicates if the object can be resolved. */
  resolvable: Scalars['Boolean'];
  /** Indicates if the object is resolved. */
  resolved: Scalars['Boolean'];
  /** Timestamp of when the object was resolved. */
  resolvedAt?: Maybe<Scalars['Time']>;
  /** User who resolved the object. */
  resolvedBy?: Maybe<UserCore>;
};

export type RootStorageStatistics = {
  __typename?: 'RootStorageStatistics';
  /** CI artifacts size in bytes. */
  buildArtifactsSize: Scalars['Float'];
  /** Container Registry size in bytes. */
  containerRegistrySize: Scalars['Float'];
  /** Dependency Proxy sizes in bytes. */
  dependencyProxySize: Scalars['Float'];
  /** LFS objects size in bytes. */
  lfsObjectsSize: Scalars['Float'];
  /** Packages size in bytes. */
  packagesSize: Scalars['Float'];
  /** CI pipeline artifacts size in bytes. */
  pipelineArtifactsSize: Scalars['Float'];
  /** Git repository size in bytes. */
  repositorySize: Scalars['Float'];
  /** Snippets size in bytes. */
  snippetsSize: Scalars['Float'];
  /** Total storage in bytes. */
  storageSize: Scalars['Float'];
  /** Uploads size in bytes. */
  uploadsSize: Scalars['Float'];
  /** Wiki size in bytes. */
  wikiSize: Scalars['Float'];
};

export type RunnerArchitecture = {
  __typename?: 'RunnerArchitecture';
  /** Download location for the runner for the platform architecture. */
  downloadLocation: Scalars['String'];
  /** Name of the runner platform architecture. */
  name: Scalars['String'];
};

/** The connection type for RunnerArchitecture. */
export type RunnerArchitectureConnection = {
  __typename?: 'RunnerArchitectureConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RunnerArchitectureEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<RunnerArchitecture>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RunnerArchitectureEdge = {
  __typename?: 'RunnerArchitectureEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<RunnerArchitecture>;
};

/** Autogenerated input type of RunnerDelete */
export type RunnerDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the runner to delete. */
  id: Scalars['CiRunnerID'];
};

/** Autogenerated return type of RunnerDelete */
export type RunnerDeletePayload = {
  __typename?: 'RunnerDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Values for filtering runners in namespaces. */
export type RunnerMembershipFilter =
  /**
   * Include runners that have either a direct relationship or a relationship with
   * descendants. These can be project runners or group runners (in the case where
   * group is queried).
   */
  | 'DESCENDANTS'
  /** Include runners that have a direct relationship. */
  | 'DIRECT';

export type RunnerPermissions = {
  __typename?: 'RunnerPermissions';
  /** Indicates the user can perform `delete_runner` on this resource */
  deleteRunner: Scalars['Boolean'];
  /** Indicates the user can perform `read_runner` on this resource */
  readRunner: Scalars['Boolean'];
  /** Indicates the user can perform `update_runner` on this resource */
  updateRunner: Scalars['Boolean'];
};

export type RunnerPlatform = {
  __typename?: 'RunnerPlatform';
  /** Runner architectures supported for the platform. */
  architectures?: Maybe<RunnerArchitectureConnection>;
  /** Human readable name of the runner platform. */
  humanReadableName: Scalars['String'];
  /** Name slug of the runner platform. */
  name: Scalars['String'];
};


export type RunnerPlatformArchitecturesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for RunnerPlatform. */
export type RunnerPlatformConnection = {
  __typename?: 'RunnerPlatformConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RunnerPlatformEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<RunnerPlatform>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RunnerPlatformEdge = {
  __typename?: 'RunnerPlatformEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<RunnerPlatform>;
};

export type RunnerSetup = {
  __typename?: 'RunnerSetup';
  /** Instructions for installing the runner on the specified architecture. */
  installInstructions: Scalars['String'];
  /**
   * Instructions for registering the runner. The actual registration tokens are
   * not included in the commands. Instead, a placeholder `$REGISTRATION_TOKEN` is shown.
   */
  registerInstructions?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of RunnerUpdate */
export type RunnerUpdateInput = {
  /** Access level of the runner. */
  accessLevel?: InputMaybe<CiRunnerAccessLevel>;
  /**
   * Indicates the runner is allowed to receive jobs. Deprecated in 14.8: This was renamed.
   * @deprecated This was renamed. Please use `paused`. Deprecated in 14.8.
   */
  active?: InputMaybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Description of the runner. */
  description?: InputMaybe<Scalars['String']>;
  /** ID of the runner to update. */
  id: Scalars['CiRunnerID'];
  /** Indicates the runner is locked. */
  locked?: InputMaybe<Scalars['Boolean']>;
  /** Runner's maintenance notes. */
  maintenanceNote?: InputMaybe<Scalars['String']>;
  /** Maximum timeout (in seconds) for jobs processed by the runner. */
  maximumTimeout?: InputMaybe<Scalars['Int']>;
  /** Indicates the runner is not allowed to receive jobs. */
  paused?: InputMaybe<Scalars['Boolean']>;
  /** Indicates the runner is able to run untagged jobs. */
  runUntagged?: InputMaybe<Scalars['Boolean']>;
  /** Tags associated with the runner. */
  tagList?: InputMaybe<Array<Scalars['String']>>;
};

/** Autogenerated return type of RunnerUpdate */
export type RunnerUpdatePayload = {
  __typename?: 'RunnerUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Runner after mutation. */
  runner?: Maybe<CiRunner>;
};

/** Autogenerated input type of RunnersRegistrationTokenReset */
export type RunnersRegistrationTokenResetInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the project or group to reset the token for. Omit if resetting instance runner token. */
  id?: InputMaybe<Scalars['ID']>;
  /** Scope of the object to reset the token for. */
  type: CiRunnerType;
};

/** Autogenerated return type of RunnersRegistrationTokenReset */
export type RunnersRegistrationTokenResetPayload = {
  __typename?: 'RunnersRegistrationTokenResetPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Runner token after mutation. */
  token?: Maybe<Scalars['String']>;
};

/** Represents a CI configuration of SAST */
export type SastCiConfiguration = {
  __typename?: 'SastCiConfiguration';
  /** List of analyzers entities attached to SAST configuration. */
  analyzers?: Maybe<SastCiConfigurationAnalyzersEntityConnection>;
  /** List of global entities related to SAST configuration. */
  global?: Maybe<SastCiConfigurationEntityConnection>;
  /** List of pipeline entities related to SAST configuration. */
  pipeline?: Maybe<SastCiConfigurationEntityConnection>;
};


/** Represents a CI configuration of SAST */
export type SastCiConfigurationAnalyzersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a CI configuration of SAST */
export type SastCiConfigurationGlobalArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a CI configuration of SAST */
export type SastCiConfigurationPipelineArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Represents an analyzer entity in SAST CI configuration */
export type SastCiConfigurationAnalyzersEntity = {
  __typename?: 'SastCiConfigurationAnalyzersEntity';
  /** Analyzer description that is displayed on the form. */
  description?: Maybe<Scalars['String']>;
  /** Indicates whether an analyzer is enabled. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** Analyzer label used in the config UI. */
  label?: Maybe<Scalars['String']>;
  /** Name of the analyzer. */
  name?: Maybe<Scalars['String']>;
  /** List of supported variables. */
  variables?: Maybe<SastCiConfigurationEntityConnection>;
};


/** Represents an analyzer entity in SAST CI configuration */
export type SastCiConfigurationAnalyzersEntityVariablesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for SastCiConfigurationAnalyzersEntity. */
export type SastCiConfigurationAnalyzersEntityConnection = {
  __typename?: 'SastCiConfigurationAnalyzersEntityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SastCiConfigurationAnalyzersEntityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SastCiConfigurationAnalyzersEntity>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SastCiConfigurationAnalyzersEntityEdge = {
  __typename?: 'SastCiConfigurationAnalyzersEntityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<SastCiConfigurationAnalyzersEntity>;
};

/** Represents the analyzers entity in SAST CI configuration */
export type SastCiConfigurationAnalyzersEntityInput = {
  /** State of the analyzer. */
  enabled: Scalars['Boolean'];
  /** Name of analyzer. */
  name: Scalars['String'];
  /** List of variables for the analyzer. */
  variables?: InputMaybe<Array<SastCiConfigurationEntityInput>>;
};

/** Represents an entity in SAST CI configuration */
export type SastCiConfigurationEntity = {
  __typename?: 'SastCiConfigurationEntity';
  /** Default value that is used if value is empty. */
  defaultValue?: Maybe<Scalars['String']>;
  /** Entity description that is displayed on the form. */
  description?: Maybe<Scalars['String']>;
  /** CI keyword of entity. */
  field?: Maybe<Scalars['String']>;
  /** Label for entity used in the form. */
  label?: Maybe<Scalars['String']>;
  /** Different possible values of the field. */
  options?: Maybe<SastCiConfigurationOptionsEntityConnection>;
  /** Size of the UI component. */
  size?: Maybe<SastUiComponentSize>;
  /** Type of the field value. */
  type?: Maybe<Scalars['String']>;
  /** Current value of the entity. */
  value?: Maybe<Scalars['String']>;
};


/** Represents an entity in SAST CI configuration */
export type SastCiConfigurationEntityOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for SastCiConfigurationEntity. */
export type SastCiConfigurationEntityConnection = {
  __typename?: 'SastCiConfigurationEntityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SastCiConfigurationEntityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SastCiConfigurationEntity>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SastCiConfigurationEntityEdge = {
  __typename?: 'SastCiConfigurationEntityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<SastCiConfigurationEntity>;
};

/** Represents an entity in SAST CI configuration */
export type SastCiConfigurationEntityInput = {
  /** Default value that is used if value is empty. */
  defaultValue: Scalars['String'];
  /** CI keyword of entity. */
  field: Scalars['String'];
  /** Current value of the entity. */
  value: Scalars['String'];
};

/** Represents a CI configuration of SAST */
export type SastCiConfigurationInput = {
  /** List of analyzers and related variables for the SAST configuration. */
  analyzers?: InputMaybe<Array<SastCiConfigurationAnalyzersEntityInput>>;
  /** List of global entities related to SAST configuration. */
  global?: InputMaybe<Array<SastCiConfigurationEntityInput>>;
  /** List of pipeline entities related to SAST configuration. */
  pipeline?: InputMaybe<Array<SastCiConfigurationEntityInput>>;
};

/** Represents an entity for options in SAST CI configuration */
export type SastCiConfigurationOptionsEntity = {
  __typename?: 'SastCiConfigurationOptionsEntity';
  /** Label of option entity. */
  label?: Maybe<Scalars['String']>;
  /** Value of option entity. */
  value?: Maybe<Scalars['String']>;
};

/** The connection type for SastCiConfigurationOptionsEntity. */
export type SastCiConfigurationOptionsEntityConnection = {
  __typename?: 'SastCiConfigurationOptionsEntityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SastCiConfigurationOptionsEntityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SastCiConfigurationOptionsEntity>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SastCiConfigurationOptionsEntityEdge = {
  __typename?: 'SastCiConfigurationOptionsEntityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<SastCiConfigurationOptionsEntity>;
};

/** Size of UI component in SAST configuration page */
export type SastUiComponentSize =
  /** Size of UI component in SAST configuration page is large. */
  | 'LARGE'
  /** Size of UI component in SAST configuration page is medium. */
  | 'MEDIUM'
  /** Size of UI component in SAST configuration page is small. */
  | 'SMALL';

export type SavedReply = {
  __typename?: 'SavedReply';
  /** Content of the saved reply. */
  content: Scalars['String'];
  /** Global ID of the saved reply. */
  id: Scalars['UsersSavedReplyID'];
  /** Name of the saved reply. */
  name: Scalars['String'];
};

/** The connection type for SavedReply. */
export type SavedReplyConnection = {
  __typename?: 'SavedReplyConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SavedReplyEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SavedReply>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of SavedReplyCreate */
export type SavedReplyCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Content of the saved reply. */
  content: Scalars['String'];
  /** Name of the saved reply. */
  name: Scalars['String'];
};

/** Autogenerated return type of SavedReplyCreate */
export type SavedReplyCreatePayload = {
  __typename?: 'SavedReplyCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Saved reply after mutation. */
  savedReply?: Maybe<SavedReply>;
};

/** Autogenerated input type of SavedReplyDestroy */
export type SavedReplyDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the saved reply. */
  id: Scalars['UsersSavedReplyID'];
};

/** Autogenerated return type of SavedReplyDestroy */
export type SavedReplyDestroyPayload = {
  __typename?: 'SavedReplyDestroyPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Saved reply after mutation. */
  savedReply?: Maybe<SavedReply>;
};

/** An edge in a connection. */
export type SavedReplyEdge = {
  __typename?: 'SavedReplyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<SavedReply>;
};

/** Autogenerated input type of SavedReplyUpdate */
export type SavedReplyUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Content of the saved reply. */
  content: Scalars['String'];
  /** Global ID of the saved reply. */
  id: Scalars['UsersSavedReplyID'];
  /** Name of the saved reply. */
  name: Scalars['String'];
};

/** Autogenerated return type of SavedReplyUpdate */
export type SavedReplyUpdatePayload = {
  __typename?: 'SavedReplyUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Saved reply after mutation. */
  savedReply?: Maybe<SavedReply>;
};

export type SecurityReportTypeEnum =
  /** API FUZZING scan report */
  | 'API_FUZZING'
  /** CLUSTER IMAGE SCANNING scan report */
  | 'CLUSTER_IMAGE_SCANNING'
  /** CONTAINER SCANNING scan report */
  | 'CONTAINER_SCANNING'
  /** COVERAGE FUZZING scan report */
  | 'COVERAGE_FUZZING'
  /** DAST scan report */
  | 'DAST'
  /** DEPENDENCY SCANNING scan report */
  | 'DEPENDENCY_SCANNING'
  /** SAST scan report */
  | 'SAST'
  /** SAST IAC scan report */
  | 'SAST_IAC'
  /** SECRET DETECTION scan report */
  | 'SECRET_DETECTION';

/** A Sentry error */
export type SentryDetailedError = {
  __typename?: 'SentryDetailedError';
  /** Count of occurrences. */
  count: Scalars['Int'];
  /** Culprit of the error. */
  culprit: Scalars['String'];
  /** External Base URL of the Sentry Instance. */
  externalBaseUrl: Scalars['String'];
  /** External URL of the error. */
  externalUrl: Scalars['String'];
  /** Commit the error was first seen. */
  firstReleaseLastCommit?: Maybe<Scalars['String']>;
  /** Release short version the error was first seen. */
  firstReleaseShortVersion?: Maybe<Scalars['String']>;
  /** Release version the error was first seen. */
  firstReleaseVersion?: Maybe<Scalars['String']>;
  /** Timestamp when the error was first seen. */
  firstSeen: Scalars['Time'];
  /** Last 24hr stats of the error. */
  frequency: Array<SentryErrorFrequency>;
  /** GitLab commit SHA attributed to the Error based on the release version. */
  gitlabCommit?: Maybe<Scalars['String']>;
  /** Path to the GitLab page for the GitLab commit attributed to the error. */
  gitlabCommitPath?: Maybe<Scalars['String']>;
  /** URL of GitLab Issue. */
  gitlabIssuePath?: Maybe<Scalars['String']>;
  /** ID (global ID) of the error. */
  id: Scalars['ID'];
  /** Error tracking backend. */
  integrated?: Maybe<Scalars['Boolean']>;
  /** Commit the error was last seen. */
  lastReleaseLastCommit?: Maybe<Scalars['String']>;
  /** Release short version the error was last seen. */
  lastReleaseShortVersion?: Maybe<Scalars['String']>;
  /** Release version the error was last seen. */
  lastReleaseVersion?: Maybe<Scalars['String']>;
  /** Timestamp when the error was last seen. */
  lastSeen: Scalars['Time'];
  /** Sentry metadata message of the error. */
  message?: Maybe<Scalars['String']>;
  /** ID (Sentry ID) of the error. */
  sentryId: Scalars['String'];
  /** ID of the project (Sentry project). */
  sentryProjectId: Scalars['ID'];
  /** Name of the project affected by the error. */
  sentryProjectName: Scalars['String'];
  /** Slug of the project affected by the error. */
  sentryProjectSlug: Scalars['String'];
  /** Short ID (Sentry ID) of the error. */
  shortId: Scalars['String'];
  /** Status of the error. */
  status: SentryErrorStatus;
  /** Tags associated with the Sentry Error. */
  tags: SentryErrorTags;
  /** Title of the error. */
  title: Scalars['String'];
  /** Type of the error. */
  type: Scalars['String'];
  /** Count of users affected by the error. */
  userCount: Scalars['Int'];
};

/** A Sentry error. A simplified version of SentryDetailedError */
export type SentryError = {
  __typename?: 'SentryError';
  /** Count of occurrences. */
  count: Scalars['Int'];
  /** Culprit of the error. */
  culprit: Scalars['String'];
  /** External URL of the error. */
  externalUrl: Scalars['String'];
  /** Timestamp when the error was first seen. */
  firstSeen: Scalars['Time'];
  /** Last 24hr stats of the error. */
  frequency: Array<SentryErrorFrequency>;
  /** ID (global ID) of the error. */
  id: Scalars['ID'];
  /** Timestamp when the error was last seen. */
  lastSeen: Scalars['Time'];
  /** Sentry metadata message of the error. */
  message?: Maybe<Scalars['String']>;
  /** ID (Sentry ID) of the error. */
  sentryId: Scalars['String'];
  /** ID of the project (Sentry project). */
  sentryProjectId: Scalars['ID'];
  /** Name of the project affected by the error. */
  sentryProjectName: Scalars['String'];
  /** Slug of the project affected by the error. */
  sentryProjectSlug: Scalars['String'];
  /** Short ID (Sentry ID) of the error. */
  shortId: Scalars['String'];
  /** Status of the error. */
  status: SentryErrorStatus;
  /** Title of the error. */
  title: Scalars['String'];
  /** Type of the error. */
  type: Scalars['String'];
  /** Count of users affected by the error. */
  userCount: Scalars['Int'];
};

/** An object containing a collection of Sentry errors, and a detailed error */
export type SentryErrorCollection = {
  __typename?: 'SentryErrorCollection';
  /** Detailed version of a Sentry error on the project. */
  detailedError?: Maybe<SentryDetailedError>;
  /** Stack Trace of Sentry Error. */
  errorStackTrace?: Maybe<SentryErrorStackTrace>;
  /** Collection of Sentry Errors. */
  errors?: Maybe<SentryErrorConnection>;
  /** External URL for Sentry. */
  externalUrl?: Maybe<Scalars['String']>;
};


/** An object containing a collection of Sentry errors, and a detailed error */
export type SentryErrorCollectionDetailedErrorArgs = {
  id: Scalars['GitlabErrorTrackingDetailedErrorID'];
};


/** An object containing a collection of Sentry errors, and a detailed error */
export type SentryErrorCollectionErrorStackTraceArgs = {
  id: Scalars['GitlabErrorTrackingDetailedErrorID'];
};


/** An object containing a collection of Sentry errors, and a detailed error */
export type SentryErrorCollectionErrorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

/** The connection type for SentryError. */
export type SentryErrorConnection = {
  __typename?: 'SentryErrorConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SentryErrorEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SentryError>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SentryErrorEdge = {
  __typename?: 'SentryErrorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<SentryError>;
};

export type SentryErrorFrequency = {
  __typename?: 'SentryErrorFrequency';
  /** Count of errors received since the previously recorded time. */
  count: Scalars['Int'];
  /** Time the error frequency stats were recorded. */
  time: Scalars['Time'];
};

/** An object containing a stack trace entry for a Sentry error */
export type SentryErrorStackTrace = {
  __typename?: 'SentryErrorStackTrace';
  /** Time the stack trace was received by Sentry. */
  dateReceived: Scalars['String'];
  /** ID of the Sentry error. */
  issueId: Scalars['String'];
  /** Stack trace entries for the Sentry error. */
  stackTraceEntries: Array<SentryErrorStackTraceEntry>;
};

/** An object context for a Sentry error stack trace */
export type SentryErrorStackTraceContext = {
  __typename?: 'SentryErrorStackTraceContext';
  /** Code number of the context. */
  code: Scalars['String'];
  /** Line number of the context. */
  line: Scalars['Int'];
};

/** An object containing a stack trace entry for a Sentry error */
export type SentryErrorStackTraceEntry = {
  __typename?: 'SentryErrorStackTraceEntry';
  /** Function in which the Sentry error occurred. */
  col?: Maybe<Scalars['String']>;
  /** File in which the Sentry error occurred. */
  fileName?: Maybe<Scalars['String']>;
  /** Function in which the Sentry error occurred. */
  function?: Maybe<Scalars['String']>;
  /** Function in which the Sentry error occurred. */
  line?: Maybe<Scalars['String']>;
  /** Context of the Sentry error. */
  traceContext?: Maybe<Array<SentryErrorStackTraceContext>>;
};

/** State of a Sentry error */
export type SentryErrorStatus =
  /** Error has been ignored. */
  | 'IGNORED'
  /** Error has been resolved. */
  | 'RESOLVED'
  /** Error has been ignored until next release. */
  | 'RESOLVED_IN_NEXT_RELEASE'
  /** Error is unresolved. */
  | 'UNRESOLVED';

/** State of a Sentry error */
export type SentryErrorTags = {
  __typename?: 'SentryErrorTags';
  /** Severity level of the Sentry Error. */
  level?: Maybe<Scalars['String']>;
  /** Logger of the Sentry Error. */
  logger?: Maybe<Scalars['String']>;
};

export type Service = {
  /** Indicates if the service is active. */
  active?: Maybe<Scalars['Boolean']>;
  /** Type of the service. */
  serviceType?: Maybe<ServiceType>;
  /** Class name of the service. */
  type?: Maybe<Scalars['String']>;
};

/** The connection type for Service. */
export type ServiceConnection = {
  __typename?: 'ServiceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ServiceEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Service>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ServiceEdge = {
  __typename?: 'ServiceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Service>;
};

export type ServiceType =
  /** AsanaService type */
  | 'ASANA_SERVICE'
  /** AssemblaService type */
  | 'ASSEMBLA_SERVICE'
  /** BambooService type */
  | 'BAMBOO_SERVICE'
  /** BugzillaService type */
  | 'BUGZILLA_SERVICE'
  /** BuildkiteService type */
  | 'BUILDKITE_SERVICE'
  /** CampfireService type */
  | 'CAMPFIRE_SERVICE'
  /** ConfluenceService type */
  | 'CONFLUENCE_SERVICE'
  /** CustomIssueTrackerService type */
  | 'CUSTOM_ISSUE_TRACKER_SERVICE'
  /** DatadogService type */
  | 'DATADOG_SERVICE'
  /** DiscordService type */
  | 'DISCORD_SERVICE'
  /** DroneCiService type */
  | 'DRONE_CI_SERVICE'
  /** EmailsOnPushService type */
  | 'EMAILS_ON_PUSH_SERVICE'
  /** EwmService type */
  | 'EWM_SERVICE'
  /** ExternalWikiService type */
  | 'EXTERNAL_WIKI_SERVICE'
  /** FlowdockService type */
  | 'FLOWDOCK_SERVICE'
  /** HangoutsChatService type */
  | 'HANGOUTS_CHAT_SERVICE'
  /** HarborService type */
  | 'HARBOR_SERVICE'
  /** IrkerService type */
  | 'IRKER_SERVICE'
  /** JenkinsService type */
  | 'JENKINS_SERVICE'
  /** JiraService type */
  | 'JIRA_SERVICE'
  /** MattermostService type */
  | 'MATTERMOST_SERVICE'
  /** MattermostSlashCommandsService type */
  | 'MATTERMOST_SLASH_COMMANDS_SERVICE'
  /** MicrosoftTeamsService type */
  | 'MICROSOFT_TEAMS_SERVICE'
  /** PackagistService type */
  | 'PACKAGIST_SERVICE'
  /** PipelinesEmailService type */
  | 'PIPELINES_EMAIL_SERVICE'
  /** PivotaltrackerService type */
  | 'PIVOTALTRACKER_SERVICE'
  /** PrometheusService type */
  | 'PROMETHEUS_SERVICE'
  /** PumbleService type */
  | 'PUMBLE_SERVICE'
  /** PushoverService type */
  | 'PUSHOVER_SERVICE'
  /** RedmineService type */
  | 'REDMINE_SERVICE'
  /** ShimoService type */
  | 'SHIMO_SERVICE'
  /** SlackService type */
  | 'SLACK_SERVICE'
  /** SlackSlashCommandsService type */
  | 'SLACK_SLASH_COMMANDS_SERVICE'
  /** TeamcityService type */
  | 'TEAMCITY_SERVICE'
  /** UnifyCircuitService type */
  | 'UNIFY_CIRCUIT_SERVICE'
  /** WebexTeamsService type */
  | 'WEBEX_TEAMS_SERVICE'
  /** YoutrackService type */
  | 'YOUTRACK_SERVICE'
  /** ZentaoService type */
  | 'ZENTAO_SERVICE';

/** How to format SHA strings. */
export type ShaFormat =
  /** Unabbreviated format. */
  | 'LONG'
  /** Abbreviated format. Short SHAs are typically eight characters long. */
  | 'SHORT';

export type SharedRunnersSetting =
  /** Sharing of runners is disabled and unoverridable. */
  | 'DISABLED_AND_UNOVERRIDABLE'
  /** Sharing of runners is disabled with override. */
  | 'DISABLED_WITH_OVERRIDE'
  /** Sharing of runners is enabled. */
  | 'ENABLED';

/** Represents a snippet entry */
export type Snippet = NoteableInterface & {
  __typename?: 'Snippet';
  /** Owner of the snippet. */
  author?: Maybe<UserCore>;
  /** Snippet blobs. */
  blobs?: Maybe<SnippetBlobConnection>;
  /** Timestamp this snippet was created. */
  createdAt: Scalars['Time'];
  /** Description of the snippet. */
  description?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `description` */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** All discussions on this noteable. */
  discussions: DiscussionConnection;
  /** File Name of the snippet. */
  fileName?: Maybe<Scalars['String']>;
  /** HTTP URL to the snippet repository. */
  httpUrlToRepo?: Maybe<Scalars['String']>;
  /** ID of the snippet. */
  id: Scalars['SnippetID'];
  /** All notes on this noteable. */
  notes: NoteConnection;
  /** Project the snippet is associated with. */
  project?: Maybe<Project>;
  /** Raw URL of the snippet. */
  rawUrl: Scalars['String'];
  /** SSH URL to the snippet repository. */
  sshUrlToRepo?: Maybe<Scalars['String']>;
  /** Title of the snippet. */
  title: Scalars['String'];
  /** Timestamp this snippet was updated. */
  updatedAt: Scalars['Time'];
  /** Permissions for the current user on the resource */
  userPermissions: SnippetPermissions;
  /** Visibility Level of the snippet. */
  visibilityLevel: VisibilityLevelsEnum;
  /** Web URL of the snippet. */
  webUrl: Scalars['String'];
};


/** Represents a snippet entry */
export type SnippetBlobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  paths?: InputMaybe<Array<Scalars['String']>>;
};


/** Represents a snippet entry */
export type SnippetDiscussionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Represents a snippet entry */
export type SnippetNotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Represents the snippet blob */
export type SnippetBlob = {
  __typename?: 'SnippetBlob';
  /** Shows whether the blob is binary. */
  binary: Scalars['Boolean'];
  /** Blob external storage. */
  externalStorage?: Maybe<Scalars['String']>;
  /** Blob mode. */
  mode?: Maybe<Scalars['String']>;
  /** Blob name. */
  name?: Maybe<Scalars['String']>;
  /** Blob path. */
  path?: Maybe<Scalars['String']>;
  /** Blob plain highlighted data. */
  plainData?: Maybe<Scalars['String']>;
  /** Blob raw content endpoint path. */
  rawPath: Scalars['String'];
  /** Raw content of the blob, if the blob is text data. */
  rawPlainData?: Maybe<Scalars['String']>;
  /** Shows whether the blob is rendered as text. */
  renderedAsText: Scalars['Boolean'];
  /** Blob highlighted data. */
  richData?: Maybe<Scalars['String']>;
  /** Blob content rich viewer. */
  richViewer?: Maybe<SnippetBlobViewer>;
  /** Blob content simple viewer. */
  simpleViewer: SnippetBlobViewer;
  /** Blob size. */
  size: Scalars['Int'];
};

/** Type of a snippet blob input action */
export type SnippetBlobActionEnum =
  /** Create a snippet blob. */
  | 'create'
  /** Delete a snippet blob. */
  | 'delete'
  /** Move a snippet blob. */
  | 'move'
  /** Update a snippet blob. */
  | 'update';

/** Represents an action to perform over a snippet file */
export type SnippetBlobActionInputType = {
  /** Type of input action. */
  action: SnippetBlobActionEnum;
  /** Snippet file content. */
  content?: InputMaybe<Scalars['String']>;
  /** Path of the snippet file. */
  filePath: Scalars['String'];
  /** Previous path of the snippet file. */
  previousPath?: InputMaybe<Scalars['String']>;
};

/** The connection type for SnippetBlob. */
export type SnippetBlobConnection = {
  __typename?: 'SnippetBlobConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SnippetBlobEdge>>>;
  /** Indicates if the snippet has unretrievable blobs. */
  hasUnretrievableBlobs: Scalars['Boolean'];
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<SnippetBlob>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SnippetBlobEdge = {
  __typename?: 'SnippetBlobEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<SnippetBlob>;
};

/** Represents how the blob content should be displayed */
export type SnippetBlobViewer = {
  __typename?: 'SnippetBlobViewer';
  /** Shows whether the blob should be displayed collapsed. */
  collapsed: Scalars['Boolean'];
  /** Content file type. */
  fileType: Scalars['String'];
  /** Shows whether the blob content is loaded asynchronously. */
  loadAsync: Scalars['Boolean'];
  /** Loading partial name. */
  loadingPartialName: Scalars['String'];
  /** Error rendering the blob content. */
  renderError?: Maybe<Scalars['String']>;
  /** Shows whether the blob is too large to be displayed. */
  tooLarge: Scalars['Boolean'];
  /** Type of blob viewer. */
  type: BlobViewersType;
};

/** The connection type for Snippet. */
export type SnippetConnection = {
  __typename?: 'SnippetConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SnippetEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Snippet>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SnippetEdge = {
  __typename?: 'SnippetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Snippet>;
};

export type SnippetPermissions = {
  __typename?: 'SnippetPermissions';
  /** Indicates the user can perform `admin_snippet` on this resource */
  adminSnippet: Scalars['Boolean'];
  /** Indicates the user can perform `award_emoji` on this resource */
  awardEmoji: Scalars['Boolean'];
  /** Indicates the user can perform `create_note` on this resource */
  createNote: Scalars['Boolean'];
  /** Indicates the user can perform `read_snippet` on this resource */
  readSnippet: Scalars['Boolean'];
  /** Indicates the user can perform `report_snippet` on this resource */
  reportSnippet: Scalars['Boolean'];
  /** Indicates the user can perform `update_snippet` on this resource */
  updateSnippet: Scalars['Boolean'];
};

/** Common sort values */
export type Sort =
  /** Created at ascending order. */
  | 'CREATED_ASC'
  /** Created at descending order. */
  | 'CREATED_DESC'
  /** Updated at ascending order. */
  | 'UPDATED_ASC'
  /** Updated at descending order. */
  | 'UPDATED_DESC'
  /** Created at ascending order. */
  | 'created_asc'
  /** Created at descending order. */
  | 'created_desc'
  /** Updated at ascending order. */
  | 'updated_asc'
  /** Updated at descending order. */
  | 'updated_desc';

export type StatusAction = {
  __typename?: 'StatusAction';
  /** Title for the button, for example: Retry this job. */
  buttonTitle?: Maybe<Scalars['String']>;
  /** Icon used in the action button. */
  icon?: Maybe<Scalars['String']>;
  /** ID for a status action. */
  id: Scalars['String'];
  /** Method for the action, for example: :post. */
  method?: Maybe<Scalars['String']>;
  /** Path for the action. */
  path?: Maybe<Scalars['String']>;
  /** Title for the action, for example: Retry. */
  title?: Maybe<Scalars['String']>;
};

export type Submodule = Entry & {
  __typename?: 'Submodule';
  /** Flat path of the entry. */
  flatPath: Scalars['String'];
  /** ID of the entry. */
  id: Scalars['ID'];
  /** Name of the entry. */
  name: Scalars['String'];
  /** Path of the entry. */
  path: Scalars['String'];
  /** Last commit SHA for the entry. */
  sha: Scalars['String'];
  /** Tree URL for the sub-module. */
  treeUrl?: Maybe<Scalars['String']>;
  /** Type of tree entry. */
  type: EntryType;
  /** Web URL for the sub-module. */
  webUrl?: Maybe<Scalars['String']>;
};

/** The connection type for Submodule. */
export type SubmoduleConnection = {
  __typename?: 'SubmoduleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SubmoduleEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Submodule>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SubmoduleEdge = {
  __typename?: 'SubmoduleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Submodule>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Triggered when the assignees of an issuable are updated. */
  issuableAssigneesUpdated?: Maybe<Issuable>;
  /** Triggered when the due date or start date of an issuable is updated. */
  issuableDatesUpdated?: Maybe<Issuable>;
  /** Triggered when the labels of an issuable are updated. */
  issuableLabelsUpdated?: Maybe<Issuable>;
  /** Triggered when the title of an issuable is updated. */
  issuableTitleUpdated?: Maybe<Issuable>;
  /** Triggered when the crm contacts of an issuable are updated. */
  issueCrmContactsUpdated?: Maybe<Issuable>;
};


export type SubscriptionIssuableAssigneesUpdatedArgs = {
  issuableId: Scalars['IssuableID'];
};


export type SubscriptionIssuableDatesUpdatedArgs = {
  issuableId: Scalars['IssuableID'];
};


export type SubscriptionIssuableLabelsUpdatedArgs = {
  issuableId: Scalars['IssuableID'];
};


export type SubscriptionIssuableTitleUpdatedArgs = {
  issuableId: Scalars['IssuableID'];
};


export type SubscriptionIssueCrmContactsUpdatedArgs = {
  issuableId: Scalars['IssuableID'];
};

/** Completion status of tasks */
export type TaskCompletionStatus = {
  __typename?: 'TaskCompletionStatus';
  /** Number of completed tasks. */
  completedCount: Scalars['Int'];
  /** Number of total tasks. */
  count: Scalars['Int'];
};

export type TerraformState = {
  __typename?: 'TerraformState';
  /** Timestamp the Terraform state was created. */
  createdAt: Scalars['Time'];
  /** Timestamp the Terraform state was deleted. */
  deletedAt?: Maybe<Scalars['Time']>;
  /** ID of the Terraform state. */
  id: Scalars['ID'];
  /** Latest version of the Terraform state. */
  latestVersion?: Maybe<TerraformStateVersion>;
  /** Timestamp the Terraform state was locked. */
  lockedAt?: Maybe<Scalars['Time']>;
  /** User currently holding a lock on the Terraform state. */
  lockedByUser?: Maybe<UserCore>;
  /** Name of the Terraform state. */
  name: Scalars['String'];
  /** Timestamp the Terraform state was updated. */
  updatedAt: Scalars['Time'];
};

/** The connection type for TerraformState. */
export type TerraformStateConnection = {
  __typename?: 'TerraformStateConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TerraformStateEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TerraformState>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of TerraformStateDelete */
export type TerraformStateDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the Terraform state. */
  id: Scalars['TerraformStateID'];
};

/** Autogenerated return type of TerraformStateDelete */
export type TerraformStateDeletePayload = {
  __typename?: 'TerraformStateDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** An edge in a connection. */
export type TerraformStateEdge = {
  __typename?: 'TerraformStateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<TerraformState>;
};

/** Autogenerated input type of TerraformStateLock */
export type TerraformStateLockInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the Terraform state. */
  id: Scalars['TerraformStateID'];
};

/** Autogenerated return type of TerraformStateLock */
export type TerraformStateLockPayload = {
  __typename?: 'TerraformStateLockPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of TerraformStateUnlock */
export type TerraformStateUnlockInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the Terraform state. */
  id: Scalars['TerraformStateID'];
};

/** Autogenerated return type of TerraformStateUnlock */
export type TerraformStateUnlockPayload = {
  __typename?: 'TerraformStateUnlockPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

export type TerraformStateVersion = {
  __typename?: 'TerraformStateVersion';
  /** Timestamp the version was created. */
  createdAt: Scalars['Time'];
  /** User that created this version. */
  createdByUser?: Maybe<UserCore>;
  /** URL for downloading the version's JSON file. */
  downloadPath?: Maybe<Scalars['String']>;
  /** ID of the Terraform state version. */
  id: Scalars['ID'];
  /** Job that created this version. */
  job?: Maybe<CiJob>;
  /** Serial number of the version. */
  serial?: Maybe<Scalars['Int']>;
  /** Timestamp the version was updated. */
  updatedAt: Scalars['Time'];
};

/** Test case in pipeline test report. */
export type TestCase = {
  __typename?: 'TestCase';
  /** URL of the test case attachment file. */
  attachmentUrl?: Maybe<Scalars['String']>;
  /** Classname of the test case. */
  classname?: Maybe<Scalars['String']>;
  /** Test case execution time in seconds. */
  executionTime?: Maybe<Scalars['Float']>;
  /** Path to the file of the test case. */
  file?: Maybe<Scalars['String']>;
  /** Name of the test case. */
  name?: Maybe<Scalars['String']>;
  /** Recent failure history of the test case on the base branch. */
  recentFailures?: Maybe<RecentFailures>;
  /** Stack trace of the test case. */
  stackTrace?: Maybe<Scalars['String']>;
  /** Status of the test case (error, failed, success, skipped). */
  status?: Maybe<TestCaseStatus>;
  /** System output of the test case. */
  systemOutput?: Maybe<Scalars['String']>;
};

/** The connection type for TestCase. */
export type TestCaseConnection = {
  __typename?: 'TestCaseConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TestCaseEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TestCase>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TestCaseEdge = {
  __typename?: 'TestCaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<TestCase>;
};

export type TestCaseStatus =
  /** Test case that has a status of error. */
  | 'error'
  /** Test case that has a status of failed. */
  | 'failed'
  /** Test case that has a status of skipped. */
  | 'skipped'
  /** Test case that has a status of success. */
  | 'success';

/** Test report for a pipeline */
export type TestReportSummary = {
  __typename?: 'TestReportSummary';
  /** Test suites belonging to a pipeline test report. */
  testSuites: TestSuiteSummaryConnection;
  /** Total report statistics for a pipeline test report. */
  total: TestReportTotal;
};


/** Test report for a pipeline */
export type TestReportSummaryTestSuitesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Total test report statistics. */
export type TestReportTotal = {
  __typename?: 'TestReportTotal';
  /** Total number of the test cases. */
  count?: Maybe<Scalars['Int']>;
  /** Total number of test cases that had an error. */
  error?: Maybe<Scalars['Int']>;
  /** Total number of test cases that failed. */
  failed?: Maybe<Scalars['Int']>;
  /** Total number of test cases that were skipped. */
  skipped?: Maybe<Scalars['Int']>;
  /** Total number of test cases that succeeded. */
  success?: Maybe<Scalars['Int']>;
  /** Test suite error message. */
  suiteError?: Maybe<Scalars['String']>;
  /** Total duration of the tests. */
  time?: Maybe<Scalars['Float']>;
};

/** Test suite in a pipeline test report. */
export type TestSuite = {
  __typename?: 'TestSuite';
  /** Total number of test cases that had an error. */
  errorCount?: Maybe<Scalars['Int']>;
  /** Total number of test cases that failed in the test suite. */
  failedCount?: Maybe<Scalars['Int']>;
  /** Name of the test suite. */
  name?: Maybe<Scalars['String']>;
  /** Total number of test cases that were skipped in the test suite. */
  skippedCount?: Maybe<Scalars['Int']>;
  /** Total number of test cases that succeeded in the test suite. */
  successCount?: Maybe<Scalars['Int']>;
  /** Test suite error message. */
  suiteError?: Maybe<Scalars['String']>;
  /** Test cases in the test suite. */
  testCases?: Maybe<TestCaseConnection>;
  /** Total number of the test cases in the test suite. */
  totalCount?: Maybe<Scalars['Int']>;
  /** Total duration of the tests in the test suite. */
  totalTime?: Maybe<Scalars['Float']>;
};


/** Test suite in a pipeline test report. */
export type TestSuiteTestCasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Test suite summary in a pipeline test report. */
export type TestSuiteSummary = {
  __typename?: 'TestSuiteSummary';
  /** IDs of the builds used to run the test suite. */
  buildIds?: Maybe<Array<Scalars['ID']>>;
  /** Total number of test cases that had an error. */
  errorCount?: Maybe<Scalars['Int']>;
  /** Total number of test cases that failed in the test suite. */
  failedCount?: Maybe<Scalars['Int']>;
  /** Name of the test suite. */
  name?: Maybe<Scalars['String']>;
  /** Total number of test cases that were skipped in the test suite. */
  skippedCount?: Maybe<Scalars['Int']>;
  /** Total number of test cases that succeeded in the test suite. */
  successCount?: Maybe<Scalars['Int']>;
  /** Test suite error message. */
  suiteError?: Maybe<Scalars['String']>;
  /** Total number of the test cases in the test suite. */
  totalCount?: Maybe<Scalars['Int']>;
  /** Total duration of the tests in the test suite. */
  totalTime?: Maybe<Scalars['Float']>;
};

/** The connection type for TestSuiteSummary. */
export type TestSuiteSummaryConnection = {
  __typename?: 'TestSuiteSummaryConnection';
  /** Total count of collection. */
  count: Scalars['Int'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TestSuiteSummaryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TestSuiteSummary>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TestSuiteSummaryEdge = {
  __typename?: 'TestSuiteSummaryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<TestSuiteSummary>;
};

export type TimeTrackingTimelogCategory = {
  __typename?: 'TimeTrackingTimelogCategory';
  /** Whether the category is billable or not. */
  billable?: Maybe<Scalars['Boolean']>;
  /** Billing rate for the category. */
  billingRate?: Maybe<Scalars['Float']>;
  /** Color assigned to the category. */
  color?: Maybe<Scalars['Color']>;
  /** When the category was created. */
  createdAt: Scalars['Time'];
  /** Description of the category. */
  description?: Maybe<Scalars['String']>;
  /** Internal ID of the timelog category. */
  id: Scalars['ID'];
  /** Name of the category. */
  name: Scalars['String'];
  /** When the category was last updated. */
  updatedAt: Scalars['Time'];
};

/** The connection type for TimeTrackingTimelogCategory. */
export type TimeTrackingTimelogCategoryConnection = {
  __typename?: 'TimeTrackingTimelogCategoryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TimeTrackingTimelogCategoryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TimeTrackingTimelogCategory>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TimeTrackingTimelogCategoryEdge = {
  __typename?: 'TimeTrackingTimelogCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<TimeTrackingTimelogCategory>;
};

/** A time-frame defined as a closed inclusive range of two dates */
export type Timeframe = {
  /** End of the range. */
  end: Scalars['Date'];
  /** Start of the range. */
  start: Scalars['Date'];
};

/** Autogenerated input type of TimelineEventCreate */
export type TimelineEventCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Incident ID of the timeline event. */
  incidentId: Scalars['IssueID'];
  /** Text note of the timeline event. */
  note: Scalars['String'];
  /** Timestamp of when the event occurred. */
  occurredAt: Scalars['Time'];
};

/** Autogenerated return type of TimelineEventCreate */
export type TimelineEventCreatePayload = {
  __typename?: 'TimelineEventCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Timeline event. */
  timelineEvent?: Maybe<TimelineEventType>;
};

/** Autogenerated input type of TimelineEventDestroy */
export type TimelineEventDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Timeline event ID to remove. */
  id: Scalars['IncidentManagementTimelineEventID'];
};

/** Autogenerated return type of TimelineEventDestroy */
export type TimelineEventDestroyPayload = {
  __typename?: 'TimelineEventDestroyPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Timeline event. */
  timelineEvent?: Maybe<TimelineEventType>;
};

/** Autogenerated input type of TimelineEventPromoteFromNote */
export type TimelineEventPromoteFromNoteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Note ID from which the timeline event promoted. */
  noteId: Scalars['NoteID'];
};

/** Autogenerated return type of TimelineEventPromoteFromNote */
export type TimelineEventPromoteFromNotePayload = {
  __typename?: 'TimelineEventPromoteFromNotePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Timeline event. */
  timelineEvent?: Maybe<TimelineEventType>;
};

/** Describes an incident management timeline event */
export type TimelineEventType = {
  __typename?: 'TimelineEventType';
  /** Indicates the timeline event icon. */
  action: Scalars['String'];
  /** User that created the timeline event. */
  author?: Maybe<UserCore>;
  /** Timestamp when the event created. */
  createdAt: Scalars['Time'];
  /** Indicates the timeline event is editable. */
  editable: Scalars['Boolean'];
  /** ID of the timeline event. */
  id: Scalars['IncidentManagementTimelineEventID'];
  /** Incident of the timeline event. */
  incident: Issue;
  /** Text note of the timeline event. */
  note?: Maybe<Scalars['String']>;
  /** HTML note of the timeline event. */
  noteHtml?: Maybe<Scalars['String']>;
  /** Timestamp when the event occurred. */
  occurredAt: Scalars['Time'];
  /** Note from which the timeline event was created. */
  promotedFromNote?: Maybe<Note>;
  /** Timestamp when the event updated. */
  updatedAt: Scalars['Time'];
  /** User that updated the timeline event. */
  updatedByUser?: Maybe<UserCore>;
};

/** The connection type for TimelineEventType. */
export type TimelineEventTypeConnection = {
  __typename?: 'TimelineEventTypeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TimelineEventTypeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TimelineEventType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TimelineEventTypeEdge = {
  __typename?: 'TimelineEventTypeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<TimelineEventType>;
};

/** Autogenerated input type of TimelineEventUpdate */
export type TimelineEventUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** ID of the timeline event to update. */
  id: Scalars['IncidentManagementTimelineEventID'];
  /** Text note of the timeline event. */
  note?: InputMaybe<Scalars['String']>;
  /** Timestamp when the event occurred. */
  occurredAt?: InputMaybe<Scalars['Time']>;
};

/** Autogenerated return type of TimelineEventUpdate */
export type TimelineEventUpdatePayload = {
  __typename?: 'TimelineEventUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Timeline event. */
  timelineEvent?: Maybe<TimelineEventType>;
};

export type Timelog = {
  __typename?: 'Timelog';
  /** Internal ID of the timelog. */
  id: Scalars['ID'];
  /** Issue that logged time was added to. */
  issue?: Maybe<Issue>;
  /** Merge request that logged time was added to. */
  mergeRequest?: Maybe<MergeRequest>;
  /** Note where the quick action was executed to add the logged time. */
  note?: Maybe<Note>;
  /** Timestamp of when the time tracked was spent at. */
  spentAt?: Maybe<Scalars['Time']>;
  /** Summary of how the time was spent. */
  summary?: Maybe<Scalars['String']>;
  /** Time spent displayed in seconds. */
  timeSpent: Scalars['Int'];
  /** User that logged the time. */
  user: UserCore;
  /** Permissions for the current user on the resource */
  userPermissions: TimelogPermissions;
};

/** The connection type for Timelog. */
export type TimelogConnection = {
  __typename?: 'TimelogConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TimelogEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Timelog>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of TimelogCreate */
export type TimelogCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the issuable (Issue, WorkItem or MergeRequest). */
  issuableId: Scalars['IssuableID'];
  /** When the time was spent. */
  spentAt: Scalars['Date'];
  /** Summary of time spent. */
  summary: Scalars['String'];
  /** Amount of time spent. */
  timeSpent: Scalars['String'];
};

/** Autogenerated return type of TimelogCreate */
export type TimelogCreatePayload = {
  __typename?: 'TimelogCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Timelog. */
  timelog?: Maybe<Timelog>;
};

/** Autogenerated input type of TimelogDelete */
export type TimelogDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the timelog. */
  id: Scalars['TimelogID'];
};

/** Autogenerated return type of TimelogDelete */
export type TimelogDeletePayload = {
  __typename?: 'TimelogDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Timelog. */
  timelog?: Maybe<Timelog>;
};

/** An edge in a connection. */
export type TimelogEdge = {
  __typename?: 'TimelogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Timelog>;
};

export type TimelogPermissions = {
  __typename?: 'TimelogPermissions';
  /** Indicates the user can perform `admin_timelog` on this resource */
  adminTimelog: Scalars['Boolean'];
};

/** Representing a to-do entry */
export type Todo = {
  __typename?: 'Todo';
  /** Action of the to-do item. */
  action: TodoActionEnum;
  /** Author of this to-do item. */
  author: UserCore;
  /** Body of the to-do item. */
  body: Scalars['String'];
  /** Timestamp this to-do item was created. */
  createdAt: Scalars['Time'];
  /** Group this to-do item is associated with. */
  group?: Maybe<Group>;
  /** ID of the to-do item. */
  id: Scalars['ID'];
  /** Note which created this to-do item. */
  note?: Maybe<Note>;
  /** Project this to-do item is associated with. */
  project?: Maybe<Project>;
  /** State of the to-do item. */
  state: TodoStateEnum;
  /** Target of the to-do item. */
  target: Todoable;
  /** Target type of the to-do item. */
  targetType: TodoTargetEnum;
};

export type TodoActionEnum =
  /** User was set as an approver. */
  | 'approval_required'
  /** User was assigned. */
  | 'assigned'
  /** Build triggered by the user failed. */
  | 'build_failed'
  /** User was directly addressed. */
  | 'directly_addressed'
  /** User added a TODO. */
  | 'marked'
  /** User was mentioned. */
  | 'mentioned'
  /** Merge request authored by the user was removed from the merge train. */
  | 'merge_train_removed'
  /** Review was requested from the user. */
  | 'review_requested'
  /** Merge request authored by the user could not be merged. */
  | 'unmergeable';

/** The connection type for Todo. */
export type TodoConnection = {
  __typename?: 'TodoConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TodoEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Todo>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of TodoCreate */
export type TodoCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the to-do item's parent. Issues, merge requests, designs, and epics are supported. */
  targetId: Scalars['TodoableID'];
};

/** Autogenerated return type of TodoCreate */
export type TodoCreatePayload = {
  __typename?: 'TodoCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** To-do item created. */
  todo?: Maybe<Todo>;
};

/** An edge in a connection. */
export type TodoEdge = {
  __typename?: 'TodoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Todo>;
};

/** Autogenerated input type of TodoMarkDone */
export type TodoMarkDoneInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the to-do item to mark as done. */
  id: Scalars['TodoID'];
};

/** Autogenerated return type of TodoMarkDone */
export type TodoMarkDonePayload = {
  __typename?: 'TodoMarkDonePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Requested to-do item. */
  todo: Todo;
};

/** Autogenerated input type of TodoRestore */
export type TodoRestoreInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the to-do item to restore. */
  id: Scalars['TodoID'];
};

/** Autogenerated input type of TodoRestoreMany */
export type TodoRestoreManyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global IDs of the to-do items to restore (a maximum of 50 is supported at once). */
  ids: Array<Scalars['TodoID']>;
};

/** Autogenerated return type of TodoRestoreMany */
export type TodoRestoreManyPayload = {
  __typename?: 'TodoRestoreManyPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Updated to-do items. */
  todos: Array<Todo>;
};

/** Autogenerated return type of TodoRestore */
export type TodoRestorePayload = {
  __typename?: 'TodoRestorePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Requested to-do item. */
  todo: Todo;
};

export type TodoStateEnum =
  /** State of the todo is done. */
  | 'done'
  /** State of the todo is pending. */
  | 'pending';

export type TodoTargetEnum =
  /** Alert. */
  | 'ALERT'
  /** Commit. */
  | 'COMMIT'
  /** Design. */
  | 'DESIGN'
  /** Issue. */
  | 'ISSUE'
  /** Merge request. */
  | 'MERGEREQUEST';

export type Todoable = {
  /** URL of this object. */
  webUrl?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of TodosMarkAllDone */
export type TodosMarkAllDoneInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /**
   * Global ID of the to-do item's parent. Issues, merge requests, designs, and
   * epics are supported. If argument is omitted, all pending to-do items of the
   * current user are marked as done.
   */
  targetId?: InputMaybe<Scalars['TodoableID']>;
};

/** Autogenerated return type of TodosMarkAllDone */
export type TodosMarkAllDonePayload = {
  __typename?: 'TodosMarkAllDonePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Updated to-do items. */
  todos: Array<Todo>;
};

export type Topic = {
  __typename?: 'Topic';
  /** URL to avatar image file of the topic. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** Description of the topic. */
  description?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `description` */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** ID of the topic. */
  id: Scalars['ID'];
  /** Name of the topic. */
  name: Scalars['String'];
  /** Title of the topic. */
  title: Scalars['String'];
};

/** The connection type for Topic. */
export type TopicConnection = {
  __typename?: 'TopicConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TopicEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Topic>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TopicEdge = {
  __typename?: 'TopicEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Topic>;
};

export type Tree = {
  __typename?: 'Tree';
  /** Blobs of the tree. */
  blobs: BlobConnection;
  /** Last commit for the tree. */
  lastCommit?: Maybe<Commit>;
  /** Sub-modules of the tree. */
  submodules: SubmoduleConnection;
  /** Trees of the tree. */
  trees: TreeEntryConnection;
};


export type TreeBlobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TreeSubmodulesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TreeTreesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Tree. */
export type TreeConnection = {
  __typename?: 'TreeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TreeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Tree>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TreeEdge = {
  __typename?: 'TreeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Tree>;
};

/** Represents a directory */
export type TreeEntry = Entry & {
  __typename?: 'TreeEntry';
  /** Flat path of the entry. */
  flatPath: Scalars['String'];
  /** ID of the entry. */
  id: Scalars['ID'];
  /** Name of the entry. */
  name: Scalars['String'];
  /** Path of the entry. */
  path: Scalars['String'];
  /** Last commit SHA for the entry. */
  sha: Scalars['String'];
  /** Type of tree entry. */
  type: EntryType;
  /** Web path for the tree entry (directory). */
  webPath?: Maybe<Scalars['String']>;
  /** Web URL for the tree entry (directory). */
  webUrl?: Maybe<Scalars['String']>;
};

/** The connection type for TreeEntry. */
export type TreeEntryConnection = {
  __typename?: 'TreeEntryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TreeEntryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TreeEntry>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TreeEntryEdge = {
  __typename?: 'TreeEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<TreeEntry>;
};

export type TypeEnum =
  /** Snippet created independent of any project. */
  | 'personal'
  /** Snippet related to a specific project. */
  | 'project';

/** Autogenerated input type of UpdateAlertStatus */
export type UpdateAlertStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** IID of the alert to mutate. */
  iid: Scalars['String'];
  /** Project the alert to mutate is in. */
  projectPath: Scalars['ID'];
  /** Status to set the alert. */
  status: AlertManagementStatus;
};

/** Autogenerated return type of UpdateAlertStatus */
export type UpdateAlertStatusPayload = {
  __typename?: 'UpdateAlertStatusPayload';
  /** Alert after mutation. */
  alert?: Maybe<AlertManagementAlert>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue created after mutation. */
  issue?: Maybe<Issue>;
  /** To-do item after mutation. */
  todo?: Maybe<Todo>;
};

/** Autogenerated input type of UpdateBoard */
export type UpdateBoardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Whether or not backlog list is hidden. */
  hideBacklogList?: InputMaybe<Scalars['Boolean']>;
  /** Whether or not closed list is hidden. */
  hideClosedList?: InputMaybe<Scalars['Boolean']>;
  /** Board global ID. */
  id: Scalars['BoardID'];
  /** Board name. */
  name?: InputMaybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateBoardList */
export type UpdateBoardListInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Indicates if the list is collapsed for this user. */
  collapsed?: InputMaybe<Scalars['Boolean']>;
  /** Global ID of the list. */
  listId: Scalars['ListID'];
  /** Position of list within the board. */
  position?: InputMaybe<Scalars['Int']>;
};

/** Autogenerated return type of UpdateBoardList */
export type UpdateBoardListPayload = {
  __typename?: 'UpdateBoardListPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Mutated list. */
  list?: Maybe<BoardList>;
};

/** Autogenerated return type of UpdateBoard */
export type UpdateBoardPayload = {
  __typename?: 'UpdateBoardPayload';
  /** Board after mutation. */
  board?: Maybe<Board>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of UpdateContainerExpirationPolicy */
export type UpdateContainerExpirationPolicyInput = {
  /** This container expiration policy schedule. */
  cadence?: InputMaybe<ContainerExpirationPolicyCadenceEnum>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Indicates whether this container expiration policy is enabled. */
  enabled?: InputMaybe<Scalars['Boolean']>;
  /** Number of tags to retain. */
  keepN?: InputMaybe<ContainerExpirationPolicyKeepEnum>;
  /** Tags with names matching this regex pattern will expire. */
  nameRegex?: InputMaybe<Scalars['UntrustedRegexp']>;
  /** Tags with names matching this regex pattern will be preserved. */
  nameRegexKeep?: InputMaybe<Scalars['UntrustedRegexp']>;
  /** Tags older that this will expire. */
  olderThan?: InputMaybe<ContainerExpirationPolicyOlderThanEnum>;
  /** Project path where the container expiration policy is located. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of UpdateContainerExpirationPolicy */
export type UpdateContainerExpirationPolicyPayload = {
  __typename?: 'UpdateContainerExpirationPolicyPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Container expiration policy after mutation. */
  containerExpirationPolicy?: Maybe<ContainerExpirationPolicy>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of UpdateDependencyProxyImageTtlGroupPolicy */
export type UpdateDependencyProxyImageTtlGroupPolicyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Indicates whether the policy is enabled or disabled. */
  enabled?: InputMaybe<Scalars['Boolean']>;
  /** Group path for the group dependency proxy image TTL policy. */
  groupPath: Scalars['ID'];
  /** Number of days to retain a cached image file. */
  ttl?: InputMaybe<Scalars['Int']>;
};

/** Autogenerated return type of UpdateDependencyProxyImageTtlGroupPolicy */
export type UpdateDependencyProxyImageTtlGroupPolicyPayload = {
  __typename?: 'UpdateDependencyProxyImageTtlGroupPolicyPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Group image TTL policy after mutation. */
  dependencyProxyImageTtlPolicy?: Maybe<DependencyProxyImageTtlGroupPolicy>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

/** Autogenerated input type of UpdateDependencyProxySettings */
export type UpdateDependencyProxySettingsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Indicates whether the policy is enabled or disabled. */
  enabled?: InputMaybe<Scalars['Boolean']>;
  /** Group path for the group dependency proxy. */
  groupPath: Scalars['ID'];
};

/** Autogenerated return type of UpdateDependencyProxySettings */
export type UpdateDependencyProxySettingsPayload = {
  __typename?: 'UpdateDependencyProxySettingsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Group dependency proxy settings after mutation. */
  dependencyProxySetting?: Maybe<DependencyProxySetting>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
};

export type UpdateDiffImagePositionInput = {
  /** Total height of the image. */
  height?: InputMaybe<Scalars['Int']>;
  /** Total width of the image. */
  width?: InputMaybe<Scalars['Int']>;
  /** X position of the note. */
  x?: InputMaybe<Scalars['Int']>;
  /** Y position of the note. */
  y?: InputMaybe<Scalars['Int']>;
};

/** Autogenerated input type of UpdateImageDiffNote */
export type UpdateImageDiffNoteInput = {
  /** Content of the note. */
  body?: InputMaybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the note to update. */
  id: Scalars['NoteID'];
  /** Position of this note on a diff. */
  position?: InputMaybe<UpdateDiffImagePositionInput>;
};

/** Autogenerated return type of UpdateImageDiffNote */
export type UpdateImageDiffNotePayload = {
  __typename?: 'UpdateImageDiffNotePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Note after mutation. */
  note?: Maybe<Note>;
};

/** Autogenerated input type of UpdateIssue */
export type UpdateIssueInput = {
  /** IDs of labels to be added to the issue. */
  addLabelIds?: InputMaybe<Array<Scalars['ID']>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Indicates the issue is confidential. */
  confidential?: InputMaybe<Scalars['Boolean']>;
  /** Description of the issue. */
  description?: InputMaybe<Scalars['String']>;
  /** Due date of the issue. */
  dueDate?: InputMaybe<Scalars['ISO8601Date']>;
  /** IID of the issue to mutate. */
  iid: Scalars['String'];
  /** IDs of labels to be set. Replaces existing issue labels. */
  labelIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Indicates discussion is locked on the issue. */
  locked?: InputMaybe<Scalars['Boolean']>;
  /** ID of the milestone to assign to the issue. On update milestone will be removed if set to null. */
  milestoneId?: InputMaybe<Scalars['ID']>;
  /** Project the issue to mutate is in. */
  projectPath: Scalars['ID'];
  /** IDs of labels to be removed from the issue. */
  removeLabelIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Close or reopen an issue. */
  stateEvent?: InputMaybe<IssueStateEvent>;
  /** Title of the issue. */
  title?: InputMaybe<Scalars['String']>;
  /** Type of the issue. */
  type?: InputMaybe<IssueType>;
};

/** Autogenerated return type of UpdateIssue */
export type UpdateIssuePayload = {
  __typename?: 'UpdateIssuePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Issue after mutation. */
  issue?: Maybe<Issue>;
};

/** Autogenerated input type of UpdateNamespacePackageSettings */
export type UpdateNamespacePackageSettingsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /**
   * When generic_duplicates_allowed is false, you can publish duplicate packages
   * with names that match this regex. Otherwise, this setting has no effect.
   */
  genericDuplicateExceptionRegex?: InputMaybe<Scalars['UntrustedRegexp']>;
  /** Indicates whether duplicate generic packages are allowed for this namespace. */
  genericDuplicatesAllowed?: InputMaybe<Scalars['Boolean']>;
  /**
   * When maven_duplicates_allowed is false, you can publish duplicate packages
   * with names that match this regex. Otherwise, this setting has no effect.
   */
  mavenDuplicateExceptionRegex?: InputMaybe<Scalars['UntrustedRegexp']>;
  /** Indicates whether duplicate Maven packages are allowed for this namespace. */
  mavenDuplicatesAllowed?: InputMaybe<Scalars['Boolean']>;
  /** Namespace path where the namespace package setting is located. */
  namespacePath: Scalars['ID'];
};

/** Autogenerated return type of UpdateNamespacePackageSettings */
export type UpdateNamespacePackageSettingsPayload = {
  __typename?: 'UpdateNamespacePackageSettingsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Namespace package setting after mutation. */
  packageSettings?: Maybe<PackageSettings>;
};

/** Autogenerated input type of UpdateNote */
export type UpdateNoteInput = {
  /** Content of the note. */
  body?: InputMaybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /**
   * Confidentiality flag of a note. Default is false. Deprecated in 14.10: No
   * longer allowed to update confidentiality of notes.
   * @deprecated No longer allowed to update confidentiality of notes. Deprecated in 14.10.
   */
  confidential?: InputMaybe<Scalars['Boolean']>;
  /** Global ID of the note to update. */
  id: Scalars['NoteID'];
};

/** Autogenerated return type of UpdateNote */
export type UpdateNotePayload = {
  __typename?: 'UpdateNotePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Note after mutation. */
  note?: Maybe<Note>;
};

/** Autogenerated input type of UpdatePackagesCleanupPolicy */
export type UpdatePackagesCleanupPolicyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Number of duplicated package files to retain. */
  keepNDuplicatedPackageFiles?: InputMaybe<PackagesCleanupKeepDuplicatedPackageFilesEnum>;
  /** Project path where the packages cleanup policy is located. */
  projectPath: Scalars['ID'];
};

/** Autogenerated return type of UpdatePackagesCleanupPolicy */
export type UpdatePackagesCleanupPolicyPayload = {
  __typename?: 'UpdatePackagesCleanupPolicyPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Packages cleanup policy after mutation. */
  packagesCleanupPolicy?: Maybe<PackagesCleanupPolicy>;
};

/** Autogenerated input type of UpdateSnippet */
export type UpdateSnippetInput = {
  /** Actions to perform over the snippet repository and blobs. */
  blobActions?: InputMaybe<Array<SnippetBlobActionInputType>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Description of the snippet. */
  description?: InputMaybe<Scalars['String']>;
  /** Global ID of the snippet to update. */
  id: Scalars['SnippetID'];
  /** Title of the snippet. */
  title?: InputMaybe<Scalars['String']>;
  /** Visibility level of the snippet. */
  visibilityLevel?: InputMaybe<VisibilityLevelsEnum>;
};

/** Autogenerated return type of UpdateSnippet */
export type UpdateSnippetPayload = {
  __typename?: 'UpdateSnippetPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Snippet after mutation. */
  snippet?: Maybe<Snippet>;
};

/** Autogenerated input type of UploadDelete */
export type UploadDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Upload filename. */
  filename: Scalars['String'];
  /** Full path of the group with which the resource is associated. */
  groupPath?: InputMaybe<Scalars['ID']>;
  /** Full path of the project with which the resource is associated. */
  projectPath?: InputMaybe<Scalars['ID']>;
  /** Secret part of upload path. */
  secret: Scalars['String'];
};

/** Autogenerated return type of UploadDelete */
export type UploadDeletePayload = {
  __typename?: 'UploadDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Deleted upload. */
  upload?: Maybe<FileUpload>;
};

/** Represents a recorded measurement (object count) for the Admins */
export type UsageTrendsMeasurement = {
  __typename?: 'UsageTrendsMeasurement';
  /** Object count. */
  count: Scalars['Int'];
  /** Type of objects being measured. */
  identifier: MeasurementIdentifier;
  /** Time the measurement was recorded. */
  recordedAt?: Maybe<Scalars['Time']>;
};

/** The connection type for UsageTrendsMeasurement. */
export type UsageTrendsMeasurementConnection = {
  __typename?: 'UsageTrendsMeasurementConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UsageTrendsMeasurementEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<UsageTrendsMeasurement>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UsageTrendsMeasurementEdge = {
  __typename?: 'UsageTrendsMeasurementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UsageTrendsMeasurement>;
};

/** Representation of a GitLab user. */
export type User = {
  /** Merge requests assigned to the user. */
  assignedMergeRequests?: Maybe<MergeRequestConnection>;
  /** Merge requests authored by the user. */
  authoredMergeRequests?: Maybe<MergeRequestConnection>;
  /** URL of the user's avatar. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** Indicates if the user is a bot. */
  bot: Scalars['Boolean'];
  /** User callouts that belong to the user. */
  callouts?: Maybe<UserCalloutConnection>;
  /**
   * User email. Deprecated in 13.7: This was renamed.
   * @deprecated This was renamed. Please use `User.publicEmail`. Deprecated in 13.7.
   */
  email?: Maybe<Scalars['String']>;
  /** Whether Gitpod is enabled at the user level. */
  gitpodEnabled?: Maybe<Scalars['Boolean']>;
  /** Group count for the user. */
  groupCount?: Maybe<Scalars['Int']>;
  /** Group memberships of the user. */
  groupMemberships?: Maybe<GroupMemberConnection>;
  /** Groups where the user has access. */
  groups?: Maybe<GroupConnection>;
  /** ID of the user. */
  id: Scalars['ID'];
  /** Location of the user. */
  location?: Maybe<Scalars['String']>;
  /**
   * Human-readable name of the user. Returns `****` if the user is a project bot
   * and the requester does not have permission to view the project.
   */
  name: Scalars['String'];
  /** Personal namespace of the user. */
  namespace?: Maybe<Namespace>;
  /** Web path to the Gitpod section within user preferences. */
  preferencesGitpodPath?: Maybe<Scalars['String']>;
  /** Web path to enable Gitpod for the user. */
  profileEnableGitpodPath?: Maybe<Scalars['String']>;
  /** Project memberships of the user. */
  projectMemberships?: Maybe<ProjectMemberConnection>;
  /** User's public email. */
  publicEmail?: Maybe<Scalars['String']>;
  /** Merge requests assigned to the user for review. */
  reviewRequestedMergeRequests?: Maybe<MergeRequestConnection>;
  /** Saved replies authored by the user. Will not return saved replies if `saved_replies` feature flag is disabled. */
  savedReplies?: Maybe<SavedReplyConnection>;
  /** Snippets authored by the user. */
  snippets?: Maybe<SnippetConnection>;
  /** Projects starred by the user. */
  starredProjects?: Maybe<ProjectConnection>;
  /** State of the user. */
  state: UserState;
  /** User status. */
  status?: Maybe<UserStatus>;
  /** Time logged by the user. */
  timelogs?: Maybe<TimelogConnection>;
  /** To-do items of the user. */
  todos?: Maybe<TodoConnection>;
  /** Permissions for the current user on the resource. */
  userPermissions: UserPermissions;
  /** Username of the user. Unique within this instance of GitLab. */
  username: Scalars['String'];
  /** Web path of the user. */
  webPath: Scalars['String'];
  /** Web URL of the user. */
  webUrl: Scalars['String'];
};


/** Representation of a GitLab user. */
export type UserAssignedMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** Representation of a GitLab user. */
export type UserAuthoredMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** Representation of a GitLab user. */
export type UserCalloutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Representation of a GitLab user. */
export type UserGroupMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Representation of a GitLab user. */
export type UserGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  permissionScope?: InputMaybe<GroupPermission>;
  search?: InputMaybe<Scalars['String']>;
};


/** Representation of a GitLab user. */
export type UserProjectMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Representation of a GitLab user. */
export type UserReviewRequestedMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** Representation of a GitLab user. */
export type UserSavedRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Representation of a GitLab user. */
export type UserSnippetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['SnippetID']>>;
  last?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<TypeEnum>;
  visibility?: InputMaybe<VisibilityScopesEnum>;
};


/** Representation of a GitLab user. */
export type UserStarredProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** Representation of a GitLab user. */
export type UserTimelogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Time']>;
  endTime?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['GroupID']>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  startDate?: InputMaybe<Scalars['Time']>;
  startTime?: InputMaybe<Scalars['Time']>;
  username?: InputMaybe<Scalars['String']>;
};


/** Representation of a GitLab user. */
export type UserTodosArgs = {
  action?: InputMaybe<Array<TodoActionEnum>>;
  after?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Array<Scalars['ID']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Array<Scalars['ID']>>;
  state?: InputMaybe<Array<TodoStateEnum>>;
  type?: InputMaybe<Array<TodoTargetEnum>>;
};

export type UserCallout = {
  __typename?: 'UserCallout';
  /** Date when the callout was dismissed. */
  dismissedAt?: Maybe<Scalars['Time']>;
  /** Name of the feature that the callout is for. */
  featureName?: Maybe<UserCalloutFeatureNameEnum>;
};

/** The connection type for UserCallout. */
export type UserCalloutConnection = {
  __typename?: 'UserCalloutConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserCalloutEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<UserCallout>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Autogenerated input type of UserCalloutCreate */
export type UserCalloutCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Feature name you want to dismiss the callout for. */
  featureName: Scalars['String'];
};

/** Autogenerated return type of UserCalloutCreate */
export type UserCalloutCreatePayload = {
  __typename?: 'UserCalloutCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** User callout dismissed. */
  userCallout: UserCallout;
};

/** An edge in a connection. */
export type UserCalloutEdge = {
  __typename?: 'UserCalloutEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UserCallout>;
};

/** Name of the feature that the callout is for. */
export type UserCalloutFeatureNameEnum =
  /** Callout feature name for active_user_count_threshold. */
  | 'ACTIVE_USER_COUNT_THRESHOLD'
  /** Callout feature name for attention_requests_side_nav. */
  | 'ATTENTION_REQUESTS_SIDE_NAV'
  /** Callout feature name for attention_requests_top_nav. */
  | 'ATTENTION_REQUESTS_TOP_NAV'
  /** Callout feature name for buy_pipeline_minutes_notification_dot. */
  | 'BUY_PIPELINE_MINUTES_NOTIFICATION_DOT'
  /** Callout feature name for canary_deployment. */
  | 'CANARY_DEPLOYMENT'
  /** Callout feature name for ci_deprecation_warning_for_types_keyword. */
  | 'CI_DEPRECATION_WARNING_FOR_TYPES_KEYWORD'
  /** Callout feature name for cloud_licensing_subscription_activation_banner. */
  | 'CLOUD_LICENSING_SUBSCRIPTION_ACTIVATION_BANNER'
  /** Callout feature name for cluster_security_warning. */
  | 'CLUSTER_SECURITY_WARNING'
  /** Callout feature name for eoa_bronze_plan_banner. */
  | 'EOA_BRONZE_PLAN_BANNER'
  /** Callout feature name for feature_flags_new_version. */
  | 'FEATURE_FLAGS_NEW_VERSION'
  /** Callout feature name for gcp_signup_offer. */
  | 'GCP_SIGNUP_OFFER'
  /** Callout feature name for geo_enable_hashed_storage. */
  | 'GEO_ENABLE_HASHED_STORAGE'
  /** Callout feature name for geo_migrate_hashed_storage. */
  | 'GEO_MIGRATE_HASHED_STORAGE'
  /** Callout feature name for gke_cluster_integration. */
  | 'GKE_CLUSTER_INTEGRATION'
  /** Callout feature name for gold_trial_billings. */
  | 'GOLD_TRIAL_BILLINGS'
  /** Callout feature name for mr_experience_survey. */
  | 'MR_EXPERIENCE_SURVEY'
  /** Callout feature name for namespace_storage_limit_banner_alert_threshold. */
  | 'NAMESPACE_STORAGE_LIMIT_BANNER_ALERT_THRESHOLD'
  /** Callout feature name for namespace_storage_limit_banner_error_threshold. */
  | 'NAMESPACE_STORAGE_LIMIT_BANNER_ERROR_THRESHOLD'
  /** Callout feature name for namespace_storage_limit_banner_info_threshold. */
  | 'NAMESPACE_STORAGE_LIMIT_BANNER_INFO_THRESHOLD'
  /** Callout feature name for namespace_storage_limit_banner_warning_threshold. */
  | 'NAMESPACE_STORAGE_LIMIT_BANNER_WARNING_THRESHOLD'
  /** Callout feature name for new_user_signups_cap_reached. */
  | 'NEW_USER_SIGNUPS_CAP_REACHED'
  /** Callout feature name for personal_access_token_expiry. */
  | 'PERSONAL_ACCESS_TOKEN_EXPIRY'
  /** Callout feature name for personal_project_limitations_banner. */
  | 'PERSONAL_PROJECT_LIMITATIONS_BANNER'
  /** Callout feature name for pipeline_needs_banner. */
  | 'PIPELINE_NEEDS_BANNER'
  /** Callout feature name for pipeline_needs_hover_tip. */
  | 'PIPELINE_NEEDS_HOVER_TIP'
  /** Callout feature name for preview_user_over_limit_free_plan_alert. */
  | 'PREVIEW_USER_OVER_LIMIT_FREE_PLAN_ALERT'
  /** Callout feature name for profile_personal_access_token_expiry. */
  | 'PROFILE_PERSONAL_ACCESS_TOKEN_EXPIRY'
  /** Callout feature name for project_quality_summary_feedback. */
  | 'PROJECT_QUALITY_SUMMARY_FEEDBACK'
  /** Callout feature name for registration_enabled_callout. */
  | 'REGISTRATION_ENABLED_CALLOUT'
  /** Callout feature name for security_configuration_devops_alert. */
  | 'SECURITY_CONFIGURATION_DEVOPS_ALERT'
  /** Callout feature name for security_configuration_upgrade_banner. */
  | 'SECURITY_CONFIGURATION_UPGRADE_BANNER'
  /** Callout feature name for security_newsletter_callout. */
  | 'SECURITY_NEWSLETTER_CALLOUT'
  /** Callout feature name for security_training_feature_promotion. */
  | 'SECURITY_TRAINING_FEATURE_PROMOTION'
  /** Callout feature name for storage_enforcement_banner_first_enforcement_threshold. */
  | 'STORAGE_ENFORCEMENT_BANNER_FIRST_ENFORCEMENT_THRESHOLD'
  /** Callout feature name for storage_enforcement_banner_fourth_enforcement_threshold. */
  | 'STORAGE_ENFORCEMENT_BANNER_FOURTH_ENFORCEMENT_THRESHOLD'
  /** Callout feature name for storage_enforcement_banner_second_enforcement_threshold. */
  | 'STORAGE_ENFORCEMENT_BANNER_SECOND_ENFORCEMENT_THRESHOLD'
  /** Callout feature name for storage_enforcement_banner_third_enforcement_threshold. */
  | 'STORAGE_ENFORCEMENT_BANNER_THIRD_ENFORCEMENT_THRESHOLD'
  /** Callout feature name for submit_license_usage_data_banner. */
  | 'SUBMIT_LICENSE_USAGE_DATA_BANNER'
  /** Callout feature name for suggest_pipeline. */
  | 'SUGGEST_PIPELINE'
  /** Callout feature name for suggest_popover_dismissed. */
  | 'SUGGEST_POPOVER_DISMISSED'
  /** Callout feature name for tabs_position_highlight. */
  | 'TABS_POSITION_HIGHLIGHT'
  /** Callout feature name for terraform_notification_dismissed. */
  | 'TERRAFORM_NOTIFICATION_DISMISSED'
  /** Callout feature name for threat_monitoring_info. */
  | 'THREAT_MONITORING_INFO'
  /** Callout feature name for trial_status_reminder_d3. */
  | 'TRIAL_STATUS_REMINDER_D3'
  /** Callout feature name for trial_status_reminder_d14. */
  | 'TRIAL_STATUS_REMINDER_D14'
  /** Callout feature name for two_factor_auth_recovery_settings_check. */
  | 'TWO_FACTOR_AUTH_RECOVERY_SETTINGS_CHECK'
  /** Callout feature name for ultimate_trial. */
  | 'ULTIMATE_TRIAL'
  /** Callout feature name for unfinished_tag_cleanup_callout. */
  | 'UNFINISHED_TAG_CLEANUP_CALLOUT'
  /** Callout feature name for user_reached_limit_free_plan_alert. */
  | 'USER_REACHED_LIMIT_FREE_PLAN_ALERT'
  /** Callout feature name for verification_reminder. */
  | 'VERIFICATION_REMINDER'
  /** Callout feature name for web_ide_alert_dismissed. */
  | 'WEB_IDE_ALERT_DISMISSED'
  /** Callout feature name for web_ide_ci_environments_guidance. */
  | 'WEB_IDE_CI_ENVIRONMENTS_GUIDANCE';

/** Core represention of a GitLab user. */
export type UserCore = User & {
  __typename?: 'UserCore';
  /** Merge requests assigned to the user. */
  assignedMergeRequests?: Maybe<MergeRequestConnection>;
  /** Merge requests authored by the user. */
  authoredMergeRequests?: Maybe<MergeRequestConnection>;
  /** URL of the user's avatar. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** Indicates if the user is a bot. */
  bot: Scalars['Boolean'];
  /** User callouts that belong to the user. */
  callouts?: Maybe<UserCalloutConnection>;
  /**
   * User email. Deprecated in 13.7: This was renamed.
   * @deprecated This was renamed. Please use `User.publicEmail`. Deprecated in 13.7.
   */
  email?: Maybe<Scalars['String']>;
  /** Whether Gitpod is enabled at the user level. */
  gitpodEnabled?: Maybe<Scalars['Boolean']>;
  /** Group count for the user. */
  groupCount?: Maybe<Scalars['Int']>;
  /** Group memberships of the user. */
  groupMemberships?: Maybe<GroupMemberConnection>;
  /** Groups where the user has access. */
  groups?: Maybe<GroupConnection>;
  /** ID of the user. */
  id: Scalars['ID'];
  /** Location of the user. */
  location?: Maybe<Scalars['String']>;
  /**
   * Human-readable name of the user. Returns `****` if the user is a project bot
   * and the requester does not have permission to view the project.
   */
  name: Scalars['String'];
  /** Personal namespace of the user. */
  namespace?: Maybe<Namespace>;
  /** Web path to the Gitpod section within user preferences. */
  preferencesGitpodPath?: Maybe<Scalars['String']>;
  /** Web path to enable Gitpod for the user. */
  profileEnableGitpodPath?: Maybe<Scalars['String']>;
  /** Project memberships of the user. */
  projectMemberships?: Maybe<ProjectMemberConnection>;
  /** User's public email. */
  publicEmail?: Maybe<Scalars['String']>;
  /** Merge requests assigned to the user for review. */
  reviewRequestedMergeRequests?: Maybe<MergeRequestConnection>;
  /** Saved replies authored by the user. Will not return saved replies if `saved_replies` feature flag is disabled. */
  savedReplies?: Maybe<SavedReplyConnection>;
  /** Snippets authored by the user. */
  snippets?: Maybe<SnippetConnection>;
  /** Projects starred by the user. */
  starredProjects?: Maybe<ProjectConnection>;
  /** State of the user. */
  state: UserState;
  /** User status. */
  status?: Maybe<UserStatus>;
  /** Time logged by the user. */
  timelogs?: Maybe<TimelogConnection>;
  /** To-do items of the user. */
  todos?: Maybe<TodoConnection>;
  /** Permissions for the current user on the resource. */
  userPermissions: UserPermissions;
  /** Username of the user. Unique within this instance of GitLab. */
  username: Scalars['String'];
  /** Web path of the user. */
  webPath: Scalars['String'];
  /** Web URL of the user. */
  webUrl: Scalars['String'];
};


/** Core represention of a GitLab user. */
export type UserCoreAssignedMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** Core represention of a GitLab user. */
export type UserCoreAuthoredMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  reviewerUsername?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** Core represention of a GitLab user. */
export type UserCoreCalloutsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Core represention of a GitLab user. */
export type UserCoreGroupMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Core represention of a GitLab user. */
export type UserCoreGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  permissionScope?: InputMaybe<GroupPermission>;
  search?: InputMaybe<Scalars['String']>;
};


/** Core represention of a GitLab user. */
export type UserCoreProjectMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Core represention of a GitLab user. */
export type UserCoreReviewRequestedMergeRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  assigneeUsername?: InputMaybe<Scalars['String']>;
  authorUsername?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  createdAfter?: InputMaybe<Scalars['Time']>;
  createdBefore?: InputMaybe<Scalars['Time']>;
  draft?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  iids?: InputMaybe<Array<Scalars['String']>>;
  labels?: InputMaybe<Array<Scalars['String']>>;
  last?: InputMaybe<Scalars['Int']>;
  mergedAfter?: InputMaybe<Scalars['Time']>;
  mergedBefore?: InputMaybe<Scalars['Time']>;
  milestoneTitle?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<MergeRequestsResolverNegatedParams>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  projectPath?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MergeRequestSort>;
  sourceBranches?: InputMaybe<Array<Scalars['String']>>;
  state?: InputMaybe<MergeRequestState>;
  targetBranches?: InputMaybe<Array<Scalars['String']>>;
  updatedAfter?: InputMaybe<Scalars['Time']>;
  updatedBefore?: InputMaybe<Scalars['Time']>;
};


/** Core represention of a GitLab user. */
export type UserCoreSavedRepliesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** Core represention of a GitLab user. */
export type UserCoreSnippetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['SnippetID']>>;
  last?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<TypeEnum>;
  visibility?: InputMaybe<VisibilityScopesEnum>;
};


/** Core represention of a GitLab user. */
export type UserCoreStarredProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


/** Core represention of a GitLab user. */
export type UserCoreTimelogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Time']>;
  endTime?: InputMaybe<Scalars['Time']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['GroupID']>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['ProjectID']>;
  startDate?: InputMaybe<Scalars['Time']>;
  startTime?: InputMaybe<Scalars['Time']>;
  username?: InputMaybe<Scalars['String']>;
};


/** Core represention of a GitLab user. */
export type UserCoreTodosArgs = {
  action?: InputMaybe<Array<TodoActionEnum>>;
  after?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Array<Scalars['ID']>>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Array<Scalars['ID']>>;
  last?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Array<Scalars['ID']>>;
  state?: InputMaybe<Array<TodoStateEnum>>;
  type?: InputMaybe<Array<TodoTargetEnum>>;
};

/** The connection type for UserCore. */
export type UserCoreConnection = {
  __typename?: 'UserCoreConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserCoreEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<UserCore>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserCoreEdge = {
  __typename?: 'UserCoreEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UserCore>;
};

/**
 * Information about a merge request given a specific user.
 *
 * This object has two parts to its state: a `User` and a `MergeRequest`. All
 * fields relate to interactions between the two entities.
 */
export type UserMergeRequestInteraction = {
  __typename?: 'UserMergeRequestInteraction';
  /** Whether this user has approved this merge request. */
  approved: Scalars['Boolean'];
  /** Whether this user can merge this merge request. */
  canMerge: Scalars['Boolean'];
  /** Whether this user can update this merge request. */
  canUpdate: Scalars['Boolean'];
  /** State of the review by this user. */
  reviewState?: Maybe<MergeRequestReviewState>;
  /** Whether this user has provided a review for this merge request. */
  reviewed: Scalars['Boolean'];
};

export type UserPermissions = {
  __typename?: 'UserPermissions';
  /** Indicates the user can perform `create_snippet` on this resource */
  createSnippet: Scalars['Boolean'];
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  /** Sort order for issue lists. */
  issuesSort?: Maybe<IssueSort>;
};

/** Autogenerated input type of UserPreferencesUpdate */
export type UserPreferencesUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Sort order for issue lists. */
  issuesSort?: InputMaybe<IssueSort>;
};

/** Autogenerated return type of UserPreferencesUpdate */
export type UserPreferencesUpdatePayload = {
  __typename?: 'UserPreferencesUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** User preferences after mutation. */
  userPreferences?: Maybe<UserPreferences>;
};

/** Possible states of a user */
export type UserState =
  /** User is active and is able to use the system. */
  | 'active'
  /** User has been blocked and is prevented from using the system. */
  | 'blocked'
  /** User is no longer active and is unable to use the system. */
  | 'deactivated';

export type UserStatus = {
  __typename?: 'UserStatus';
  /** User availability status. */
  availability: AvailabilityEnum;
  /** String representation of emoji. */
  emoji?: Maybe<Scalars['String']>;
  /** User status message. */
  message?: Maybe<Scalars['String']>;
  /** HTML of the user status message */
  messageHtml?: Maybe<Scalars['String']>;
};

export type VisibilityLevelsEnum =
  /** Internal visibility level. */
  | 'internal'
  /** Private visibility level. */
  | 'private'
  /** Public visibility level. */
  | 'public';

export type VisibilityScopesEnum =
  /** Snippet is visible for any logged in user except external users. */
  | 'internal'
  /** Snippet is visible only to the snippet creator. */
  | 'private'
  /** Snippet can be accessed without any authentication. */
  | 'public';

export type WorkItem = {
  __typename?: 'WorkItem';
  /** Indicates the work item is confidential. */
  confidential: Scalars['Boolean'];
  /** Description of the work item. */
  description?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `description` */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** Global ID of the work item. */
  id: Scalars['WorkItemID'];
  /** Internal ID of the work item. */
  iid: Scalars['ID'];
  /** Lock version of the work item. Incremented each time the work item is updated. */
  lockVersion: Scalars['Int'];
  /** State of the work item. */
  state: WorkItemState;
  /** Title of the work item. */
  title: Scalars['String'];
  /** The GitLab Flavored Markdown rendering of `title` */
  titleHtml?: Maybe<Scalars['String']>;
  /** Permissions for the current user on the resource */
  userPermissions: WorkItemPermissions;
  /** Collection of widgets that belong to the work item. */
  widgets?: Maybe<Array<WorkItemWidget>>;
  /** Type assigned to the work item. */
  workItemType: WorkItemType;
};

/** The connection type for WorkItem. */
export type WorkItemConnection = {
  __typename?: 'WorkItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WorkItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<WorkItem>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WorkItemConvertTaskInput = {
  /** Last line in the Markdown source that defines the list item task. */
  lineNumberEnd: Scalars['Int'];
  /** First line in the Markdown source that defines the list item task. */
  lineNumberStart: Scalars['Int'];
  /** Current lock version of the work item containing the task in the description. */
  lockVersion: Scalars['Int'];
  /** Full string of the task to be replaced. New title for the created work item. */
  title: Scalars['String'];
  /** Global ID of the work item type used to create the new work item. */
  workItemTypeId: Scalars['WorkItemsTypeID'];
};

/** Autogenerated input type of WorkItemCreateFromTask */
export type WorkItemCreateFromTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the work item. */
  id: Scalars['WorkItemID'];
  /** Arguments necessary to convert a task into a work item. */
  workItemData: WorkItemConvertTaskInput;
};

/** Autogenerated return type of WorkItemCreateFromTask */
export type WorkItemCreateFromTaskPayload = {
  __typename?: 'WorkItemCreateFromTaskPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** New work item created from task. */
  newWorkItem?: Maybe<WorkItem>;
  /** Updated work item. */
  workItem?: Maybe<WorkItem>;
};

/** Autogenerated input type of WorkItemCreate */
export type WorkItemCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Sets the work item confidentiality. */
  confidential?: InputMaybe<Scalars['Boolean']>;
  /** Description of the work item. */
  description?: InputMaybe<Scalars['String']>;
  /** Input for hierarchy widget. */
  hierarchyWidget?: InputMaybe<WorkItemWidgetHierarchyCreateInput>;
  /** Full path of the project the work item is associated with. */
  projectPath: Scalars['ID'];
  /** Title of the work item. */
  title: Scalars['String'];
  /** Global ID of a work item type. */
  workItemTypeId: Scalars['WorkItemsTypeID'];
};

/** Autogenerated return type of WorkItemCreate */
export type WorkItemCreatePayload = {
  __typename?: 'WorkItemCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Created work item. */
  workItem?: Maybe<WorkItem>;
};

/** Autogenerated input type of WorkItemDelete */
export type WorkItemDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the work item. */
  id: Scalars['WorkItemID'];
};

/** Autogenerated return type of WorkItemDelete */
export type WorkItemDeletePayload = {
  __typename?: 'WorkItemDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Project the deleted work item belonged to. */
  project?: Maybe<Project>;
};

/** Autogenerated input type of WorkItemDeleteTask */
export type WorkItemDeleteTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the work item. */
  id: Scalars['WorkItemID'];
  /** Current lock version of the work item containing the task in the description. */
  lockVersion: Scalars['Int'];
  /** Arguments necessary to delete a task from a work item's description. */
  taskData: WorkItemDeletedTaskInput;
};

/** Autogenerated return type of WorkItemDeleteTask */
export type WorkItemDeleteTaskPayload = {
  __typename?: 'WorkItemDeleteTaskPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Updated work item. */
  workItem?: Maybe<WorkItem>;
};

export type WorkItemDeletedTaskInput = {
  /** Global ID of the task referenced in the work item's description. */
  id: Scalars['WorkItemID'];
  /** Last line in the Markdown source that defines the list item task. */
  lineNumberEnd: Scalars['Int'];
  /** First line in the Markdown source that defines the list item task. */
  lineNumberStart: Scalars['Int'];
};

/** An edge in a connection. */
export type WorkItemEdge = {
  __typename?: 'WorkItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<WorkItem>;
};

/** Check permissions for the current user on a work item */
export type WorkItemPermissions = {
  __typename?: 'WorkItemPermissions';
  /** Indicates the user can perform `delete_work_item` on this resource */
  deleteWorkItem: Scalars['Boolean'];
  /** Indicates the user can perform `read_work_item` on this resource */
  readWorkItem: Scalars['Boolean'];
  /** Indicates the user can perform `update_work_item` on this resource */
  updateWorkItem: Scalars['Boolean'];
};

/** Values for sorting work items */
export type WorkItemSort =
  /** Created at ascending order. */
  | 'CREATED_ASC'
  /** Created at descending order. */
  | 'CREATED_DESC'
  /** Title by ascending order. */
  | 'TITLE_ASC'
  /** Title by descending order. */
  | 'TITLE_DESC'
  /** Updated at ascending order. */
  | 'UPDATED_ASC'
  /** Updated at descending order. */
  | 'UPDATED_DESC'
  /** Created at ascending order. */
  | 'created_asc'
  /** Created at descending order. */
  | 'created_desc'
  /** Updated at ascending order. */
  | 'updated_asc'
  /** Updated at descending order. */
  | 'updated_desc';

/** State of a GitLab work item */
export type WorkItemState =
  /** In closed state. */
  | 'CLOSED'
  /** In open state. */
  | 'OPEN';

/** Values for work item state events */
export type WorkItemStateEvent =
  /** Closes the work item. */
  | 'CLOSE'
  /** Reopens the work item. */
  | 'REOPEN';

export type WorkItemType = {
  __typename?: 'WorkItemType';
  /** Icon name of the work item type. */
  iconName?: Maybe<Scalars['String']>;
  /** Global ID of the work item type. */
  id: Scalars['WorkItemsTypeID'];
  /** Name of the work item type. */
  name: Scalars['String'];
};

/** The connection type for WorkItemType. */
export type WorkItemTypeConnection = {
  __typename?: 'WorkItemTypeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WorkItemTypeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<WorkItemType>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WorkItemTypeEdge = {
  __typename?: 'WorkItemTypeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<WorkItemType>;
};

/** Autogenerated input type of WorkItemUpdate */
export type WorkItemUpdateInput = {
  /** Input for assignees widget. */
  assigneesWidget?: InputMaybe<WorkItemWidgetAssigneesInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Sets the work item confidentiality. */
  confidential?: InputMaybe<Scalars['Boolean']>;
  /** Input for description widget. */
  descriptionWidget?: InputMaybe<WorkItemWidgetDescriptionInput>;
  /** Input for hierarchy widget. */
  hierarchyWidget?: InputMaybe<WorkItemWidgetHierarchyUpdateInput>;
  /** Global ID of the work item. */
  id: Scalars['WorkItemID'];
  /** Input for start and due date widget. */
  startAndDueDateWidget?: InputMaybe<WorkItemWidgetStartAndDueDateUpdateInput>;
  /** Close or reopen a work item. */
  stateEvent?: InputMaybe<WorkItemStateEvent>;
  /** Title of the work item. */
  title?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of WorkItemUpdate */
export type WorkItemUpdatePayload = {
  __typename?: 'WorkItemUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Updated work item. */
  workItem?: Maybe<WorkItem>;
};

/** Autogenerated input type of WorkItemUpdateTask */
export type WorkItemUpdateTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Global ID of the work item. */
  id: Scalars['WorkItemID'];
  /** Arguments necessary to update a task. */
  taskData: WorkItemUpdatedTaskInput;
};

/** Autogenerated return type of WorkItemUpdateTask */
export type WorkItemUpdateTaskPayload = {
  __typename?: 'WorkItemUpdateTaskPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Updated task. */
  task?: Maybe<WorkItem>;
  /** Updated work item. */
  workItem?: Maybe<WorkItem>;
};

/** Autogenerated input type of WorkItemUpdateWidgets */
export type WorkItemUpdateWidgetsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Input for description widget. */
  descriptionWidget?: InputMaybe<WorkItemWidgetDescriptionInput>;
  /** Global ID of the work item. */
  id: Scalars['WorkItemID'];
};

/** Autogenerated return type of WorkItemUpdateWidgets */
export type WorkItemUpdateWidgetsPayload = {
  __typename?: 'WorkItemUpdateWidgetsPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Errors encountered during execution of the mutation. */
  errors: Array<Scalars['String']>;
  /** Updated work item. */
  workItem?: Maybe<WorkItem>;
};

export type WorkItemUpdatedTaskInput = {
  /** Input for assignees widget. */
  assigneesWidget?: InputMaybe<WorkItemWidgetAssigneesInput>;
  /** Sets the work item confidentiality. */
  confidential?: InputMaybe<Scalars['Boolean']>;
  /** Input for description widget. */
  descriptionWidget?: InputMaybe<WorkItemWidgetDescriptionInput>;
  /** Input for hierarchy widget. */
  hierarchyWidget?: InputMaybe<WorkItemWidgetHierarchyUpdateInput>;
  /** Global ID of the work item. */
  id: Scalars['WorkItemID'];
  /** Input for start and due date widget. */
  startAndDueDateWidget?: InputMaybe<WorkItemWidgetStartAndDueDateUpdateInput>;
  /** Close or reopen a work item. */
  stateEvent?: InputMaybe<WorkItemStateEvent>;
  /** Title of the work item. */
  title?: InputMaybe<Scalars['String']>;
};

export type WorkItemWidget = {
  /** Widget type. */
  type?: Maybe<WorkItemWidgetType>;
};

/** Represents an assignees widget */
export type WorkItemWidgetAssignees = WorkItemWidget & {
  __typename?: 'WorkItemWidgetAssignees';
  /** Indicates whether multiple assignees are allowed. */
  allowsMultipleAssignees?: Maybe<Scalars['Boolean']>;
  /** Assignees of the work item. */
  assignees?: Maybe<UserCoreConnection>;
  /** Indicates whether the current user can invite members to the work item's project. */
  canInviteMembers: Scalars['Boolean'];
  /** Widget type. */
  type?: Maybe<WorkItemWidgetType>;
};


/** Represents an assignees widget */
export type WorkItemWidgetAssigneesAssigneesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type WorkItemWidgetAssigneesInput = {
  /** Global IDs of assignees. */
  assigneeIds: Array<Scalars['UserID']>;
};

/** Represents a description widget */
export type WorkItemWidgetDescription = WorkItemWidget & {
  __typename?: 'WorkItemWidgetDescription';
  /** Description of the work item. */
  description?: Maybe<Scalars['String']>;
  /** The GitLab Flavored Markdown rendering of `description` */
  descriptionHtml?: Maybe<Scalars['String']>;
  /** Widget type. */
  type?: Maybe<WorkItemWidgetType>;
};

export type WorkItemWidgetDescriptionInput = {
  /** Description of the work item. */
  description: Scalars['String'];
};

/** Represents a hierarchy widget */
export type WorkItemWidgetHierarchy = WorkItemWidget & {
  __typename?: 'WorkItemWidgetHierarchy';
  /** Child work items. */
  children?: Maybe<WorkItemConnection>;
  /** Parent work item. */
  parent?: Maybe<WorkItem>;
  /** Widget type. */
  type?: Maybe<WorkItemWidgetType>;
};


/** Represents a hierarchy widget */
export type WorkItemWidgetHierarchyChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type WorkItemWidgetHierarchyCreateInput = {
  /** Global ID of the parent work item. */
  parentId?: InputMaybe<Scalars['WorkItemID']>;
};

export type WorkItemWidgetHierarchyUpdateInput = {
  /** Global IDs of children work items. */
  childrenIds?: InputMaybe<Array<Scalars['WorkItemID']>>;
  /** Global ID of the parent work item. Use `null` to remove the association. */
  parentId?: InputMaybe<Scalars['WorkItemID']>;
};

/** Represents the labels widget */
export type WorkItemWidgetLabels = WorkItemWidget & {
  __typename?: 'WorkItemWidgetLabels';
  /** Indicates whether a scoped label is allowed. */
  allowsScopedLabels?: Maybe<Scalars['Boolean']>;
  /** Labels assigned to the work item. */
  labels?: Maybe<LabelConnection>;
  /** Widget type. */
  type?: Maybe<WorkItemWidgetType>;
};


/** Represents the labels widget */
export type WorkItemWidgetLabelsLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Represents a start and due date widget */
export type WorkItemWidgetStartAndDueDate = WorkItemWidget & {
  __typename?: 'WorkItemWidgetStartAndDueDate';
  /** Due date of the work item. */
  dueDate?: Maybe<Scalars['Date']>;
  /** Start date of the work item. */
  startDate?: Maybe<Scalars['Date']>;
  /** Widget type. */
  type?: Maybe<WorkItemWidgetType>;
};

export type WorkItemWidgetStartAndDueDateUpdateInput = {
  /** Due date for the work item. */
  dueDate?: InputMaybe<Scalars['Date']>;
  /** Start date for the work item. */
  startDate?: InputMaybe<Scalars['Date']>;
};

/** Type of a work item widget */
export type WorkItemWidgetType =
  /** Assignees widget. */
  | 'ASSIGNEES'
  /** Description widget. */
  | 'DESCRIPTION'
  /** Hierarchy widget. */
  | 'HIERARCHY'
  /** Labels widget. */
  | 'LABELS'
  /** Start And Due Date widget. */
  | 'START_AND_DUE_DATE';

export type CreateCommitMutationVariables = Exact<{
  fullPath: Scalars['ID'];
  appId?: InputMaybe<Scalars['String']>;
  branch: Scalars['String'];
  commitMessage: Scalars['String'];
  actions: Array<CommitAction> | CommitAction;
}>;


export type CreateCommitMutation = { __typename?: 'Mutation', commitCreate?: { __typename?: 'CommitCreatePayload', errors: Array<string>, commit?: { __typename?: 'Commit', sha: string } | null } | null };

export type GetAllRepositoriesForOwnerQueryVariables = Exact<{
  login: Scalars['ID'];
}>;


export type GetAllRepositoriesForOwnerQuery = { __typename?: 'Query', namespace?: { __typename?: 'Namespace', projects: { __typename?: 'ProjectConnection', nodes?: Array<{ __typename?: 'Project', fullPath: string } | null> | null } } | null };

export type GetAllRepositoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRepositoriesQuery = { __typename?: 'Query', projects?: { __typename?: 'ProjectConnection', nodes?: Array<{ __typename?: 'Project', name: string, namespace?: { __typename?: 'Namespace', path: string } | null } | null> | null } | null };

export type GetNamespaceIdQueryVariables = Exact<{
  name: Scalars['ID'];
}>;


export type GetNamespaceIdQuery = { __typename?: 'Query', namespace?: { __typename?: 'Namespace', id: string } | null };

export type IsRepositoryArchivedQueryVariables = Exact<{
  fullPath: Scalars['ID'];
}>;


export type IsRepositoryArchivedQuery = { __typename?: 'Query', project?: { __typename?: 'Project', archived?: boolean | null } | null };

export type SearchByFilePathQueryVariables = Exact<{
  filePath?: InputMaybe<Scalars['String']>;
}>;


export type SearchByFilePathQuery = { __typename?: 'Query', projects?: { __typename?: 'ProjectConnection', nodes?: Array<{ __typename?: 'Project', fullPath: string, repository?: { __typename?: 'Repository', tree?: { __typename?: 'Tree', lastCommit?: { __typename?: 'Commit', shortId: string } | null } | null } | null } | null> | null } | null };


export const CreateCommitDocument = gql`
    mutation createCommit($fullPath: ID!, $appId: String, $branch: String!, $commitMessage: String!, $actions: [CommitAction!]!) {
  commitCreate(
    input: {projectPath: $fullPath, clientMutationId: $appId, branch: $branch, message: $commitMessage, actions: $actions}
  ) {
    errors
    commit {
      sha
    }
  }
}
    `;
export const GetAllRepositoriesForOwnerDocument = gql`
    query getAllRepositoriesForOwner($login: ID!) {
  namespace(fullPath: $login) {
    projects {
      nodes {
        fullPath
      }
    }
  }
}
    `;
export const GetAllRepositoriesDocument = gql`
    query getAllRepositories {
  projects(membership: true) {
    nodes {
      name
      namespace {
        path
      }
    }
  }
}
    `;
export const GetNamespaceIdDocument = gql`
    query getNamespaceId($name: ID!) {
  namespace(fullPath: $name) {
    id
  }
}
    `;
export const IsRepositoryArchivedDocument = gql`
    query isRepositoryArchived($fullPath: ID!) {
  project(fullPath: $fullPath) {
    archived
  }
}
    `;
export const SearchByFilePathDocument = gql`
    query searchByFilePath($filePath: String) {
  projects(membership: true) {
    nodes {
      fullPath
      repository {
        tree(path: $filePath) {
          lastCommit {
            shortId
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createCommit(variables: CreateCommitMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateCommitMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCommitMutation>(CreateCommitDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCommit', 'mutation');
    },
    getAllRepositoriesForOwner(variables: GetAllRepositoriesForOwnerQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllRepositoriesForOwnerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllRepositoriesForOwnerQuery>(GetAllRepositoriesForOwnerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllRepositoriesForOwner', 'query');
    },
    getAllRepositories(variables?: GetAllRepositoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllRepositoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllRepositoriesQuery>(GetAllRepositoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllRepositories', 'query');
    },
    getNamespaceId(variables: GetNamespaceIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetNamespaceIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNamespaceIdQuery>(GetNamespaceIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNamespaceId', 'query');
    },
    isRepositoryArchived(variables: IsRepositoryArchivedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IsRepositoryArchivedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IsRepositoryArchivedQuery>(IsRepositoryArchivedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'isRepositoryArchived', 'query');
    },
    searchByFilePath(variables?: SearchByFilePathQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchByFilePathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchByFilePathQuery>(SearchByFilePathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchByFilePath', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;