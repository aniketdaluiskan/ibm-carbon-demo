import React, { useState } from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  Content,
  Grid,
  Column,
  Tile,
  Button,
  TextInput,
  Dropdown,
  Checkbox,
  RadioButtonGroup,
  RadioButton,
  Toggle,
  Slider,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Modal,
  OverflowMenu,
  OverflowMenuItem,
  Accordion,
  AccordionItem,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  InlineNotification,
  ToastNotification,
} from '@carbon/react';
import {
  Notification as NotificationIcon,
  UserAvatar,
  Settings,
} from '@carbon/icons-react';

const dropdownItems = [
  { id: 'us-east', text: 'US East' },
  { id: 'us-west', text: 'US West' },
  { id: 'eu-central', text: 'EU Central' },
  { id: 'ap-south', text: 'AP South' },
];

const tableHeaders = [
  { key: 'name', header: 'Name' },
  { key: 'status', header: 'Status' },
  { key: 'owner', header: 'Owner' },
  { key: 'updated', header: 'Last updated' },
];

const tableRows = [
  {
    id: 'row-1',
    name: 'Order Processing Pipeline',
    status: 'Active',
    owner: 'Alex Rivera',
    updated: '2026-09-14',
  },
  {
    id: 'row-2',
    name: 'Invoice Reconciliation',
    status: 'Paused',
    owner: 'Jordan Lee',
    updated: '2026-09-10',
  },
  {
    id: 'row-3',
    name: 'Customer Onboarding Flow',
    status: 'Active',
    owner: 'Priya Nandakumar',
    updated: '2026-09-12',
  },
  {
    id: 'row-4',
    name: 'Refund Approval Workflow',
    status: 'Draft',
    owner: 'Sam Okafor',
    updated: '2026-09-08',
  },
  {
    id: 'row-5',
    name: 'Vendor Compliance Audit',
    status: 'Active',
    owner: 'Morgan Chase',
    updated: '2026-09-15',
  },
];

function Section({ id, title, description, children }) {
  return (
    <section aria-labelledby={`${id}-heading`} className="demo-section">
      <h2 id={`${id}-heading`} className="demo-section__title">
        {title}
      </h2>
      {description && <p className="demo-section__description">{description}</p>}
      <div className="demo-section__body">{children}</div>
    </section>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(true);
  const [notificationVisible, setNotificationVisible] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);
  const [toggleChecked, setToggleChecked] = useState(true);

  return (
    <>
      <a className="skip-to-content-anchor" />
      <Header aria-label="Carbon UI Demo Platform">
        <SkipToContent />
        <HeaderName href="#main-content" prefix="IBM">
          Carbon UI Demo
        </HeaderName>
        <HeaderNavigation aria-label="Primary navigation">
          <HeaderMenuItem href="#dashboard-tabs">Dashboard</HeaderMenuItem>
          <HeaderMenuItem href="#data-section">Reports</HeaderMenuItem>
          <HeaderMenuItem href="#form-controls">Settings</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={() => setNotificationVisible(true)}
          >
            <NotificationIcon size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Settings">
            <Settings size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User profile">
            <UserAvatar size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>

      <Content id="main-content" className="demo-content">
        <Grid className="demo-grid" fullWidth>
          <Column lg={16} md={8} sm={4}>
            <h1 className="demo-page-title">Carbon Design System Component Gallery</h1>
            <p className="demo-page-subtitle">
              A single-page reference implementation exercising a wide range of
              IBM Carbon React components with real, semantic markup.
            </p>
          </Column>
        </Grid>

        {notificationVisible && (
          <Grid className="demo-grid" fullWidth>
            <Column lg={16} md={8} sm={4}>
              <InlineNotification
                kind="info"
                title="Sample workspace"
                subtitle="This page renders generic demo data only. Nothing here is connected to a live backend."
                onCloseButtonClick={() => setNotificationVisible(false)}
                lowContrast
              />
            </Column>
          </Grid>
        )}

        {/* Form controls */}
        <Section
          id="form-controls"
          title="Form controls"
          description="Buttons, text entry, selection, and range controls."
        >
          <Grid className="demo-grid" fullWidth>
            <Column lg={5} md={4} sm={4}>
              <TextInput
                id="text-input-project-name"
                labelText="Project name"
                placeholder="e.g. Order Processing Pipeline"
                helperText="Displayed to teammates in the workspace list."
              />
            </Column>
            <Column lg={5} md={4} sm={4}>
              <Dropdown
                id="dropdown-region"
                titleText="Deployment region"
                label="Choose a region"
                items={dropdownItems}
                itemToString={(item) => (item ? item.text : '')}
              />
            </Column>
            <Column lg={6} md={8} sm={4}>
              <fieldset className="demo-fieldset">
                <legend className="cds--label">Notification preferences</legend>
                <Checkbox
                  id="checkbox-email"
                  labelText="Email me when a workflow fails"
                  defaultChecked
                />
                <Checkbox
                  id="checkbox-sms"
                  labelText="Send an SMS for critical alerts"
                />
              </fieldset>
            </Column>
          </Grid>

          <Grid className="demo-grid" fullWidth>
            <Column lg={5} md={4} sm={4}>
              <RadioButtonGroup
                legendText="Default environment"
                name="environment-group"
                defaultSelected="staging"
              >
                <RadioButton labelText="Production" value="production" id="radio-production" />
                <RadioButton labelText="Staging" value="staging" id="radio-staging" />
                <RadioButton labelText="Development" value="development" id="radio-development" />
              </RadioButtonGroup>
            </Column>
            <Column lg={4} md={4} sm={4}>
              <Toggle
                id="toggle-auto-retry"
                labelText="Automatic retry"
                labelA="Off"
                labelB="On"
                toggled={toggleChecked}
                onToggle={setToggleChecked}
              />
            </Column>
            <Column lg={7} md={8} sm={4}>
              <Slider
                id="slider-concurrency"
                labelText="Maximum concurrent jobs"
                min={0}
                max={100}
                step={5}
                value={sliderValue}
                onChange={({ value }) => setSliderValue(value)}
              />
            </Column>
          </Grid>

          <Grid className="demo-grid" fullWidth>
            <Column lg={16} md={8} sm={4} className="demo-button-row">
              <Button kind="primary" onClick={() => setModalOpen(true)}>
                Open confirmation modal
              </Button>
              <Button kind="secondary">Save draft</Button>
              <Button kind="tertiary">Reset form</Button>
              <Button kind="danger--tertiary">Discard changes</Button>
              <OverflowMenu aria-label="More project actions" flipped={false}>
                <OverflowMenuItem itemText="Duplicate project" />
                <OverflowMenuItem itemText="Export configuration" />
                <OverflowMenuItem itemText="Archive project" isDelete />
              </OverflowMenu>
            </Column>
          </Grid>
        </Section>

        {/* Tabs */}
        <Section
          id="dashboard-tabs"
          title="Dashboard tabs"
          description="Grouped content panels for switching between related views."
        >
          <Tabs>
            <TabList aria-label="Dashboard sections">
              <Tab>Overview</Tab>
              <Tab>Activity</Tab>
              <Tab>Team</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>
                  This workspace currently has 5 workflows configured, 3 of
                  which are active. Overall throughput is steady with no
                  open incidents.
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  Priya Nandakumar updated the Customer Onboarding Flow
                  2 hours ago. Morgan Chase ran a compliance audit
                  earlier today.
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  4 teammates have edit access to this workspace: Alex
                  Rivera, Jordan Lee, Priya Nandakumar, and Sam Okafor.
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Section>

        {/* Accordion */}
        <Section
          id="accordion-section"
          title="Frequently asked questions"
          description="Collapsible panels for progressively disclosed content."
        >
          <Accordion>
            <AccordionItem title="How do I create a new workflow?">
              <p>
                Select &quot;New workflow&quot; from the dashboard, choose a
                template, and configure the trigger conditions.
              </p>
            </AccordionItem>
            <AccordionItem title="Who can approve a paused workflow?">
              <p>
                Any teammate with the Workspace Admin or Workflow Owner
                role can resume a paused workflow from the details panel.
              </p>
            </AccordionItem>
            <AccordionItem title="Where can I see audit history?">
              <p>
                Audit history is available under Reports &gt; Compliance
                Audit for any workflow in this workspace.
              </p>
            </AccordionItem>
          </Accordion>
        </Section>

        {/* Data table */}
        <Section
          id="data-section"
          title="Workflows"
          description="A sortable, searchable table of workspace records."
        >
          <DataTable rows={tableRows} headers={tableHeaders} isSortable>
            {({
              rows,
              headers,
              getHeaderProps,
              getRowProps,
              getTableProps,
              getToolbarProps,
              getTableContainerProps,
              onInputChange,
            }) => (
              <TableContainer
                title="Workflows"
                description="All workflows configured in this workspace."
                {...getTableContainerProps()}
              >
                <TableToolbar {...getToolbarProps()}>
                  <TableToolbarContent>
                    <TableToolbarSearch
                      persistent
                      placeholder="Search workflows"
                      onChange={onInputChange}
                    />
                  </TableToolbarContent>
                </TableToolbar>
                <Table {...getTableProps()} aria-label="Workflows table">
                  <TableHead>
                    <TableRow>
                      {headers.map((header) => (
                        <TableHeader
                          {...getHeaderProps({ header })}
                          key={header.key}
                        >
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow {...getRowProps({ row })} key={row.id}>
                        {row.cells.map((cell) => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </DataTable>
        </Section>

        {/* Notifications */}
        <Section
          id="notifications-section"
          title="Notifications"
          description="Inline and toast notification patterns for surfacing status."
        >
          <Grid className="demo-grid" fullWidth>
            <Column lg={8} md={4} sm={4}>
              <InlineNotification
                kind="warning"
                title="Approaching quota"
                subtitle="This workspace has used 82% of its monthly job allowance."
                lowContrast
              />
            </Column>
            <Column lg={8} md={4} sm={4}>
              {toastVisible && (
                <ToastNotification
                  kind="success"
                  title="Workflow saved"
                  subtitle="Order Processing Pipeline was updated successfully."
                  caption="Just now"
                  onCloseButtonClick={() => setToastVisible(false)}
                  lowContrast
                />
              )}
            </Column>
          </Grid>
        </Section>

        <Tile className="demo-tile">
          <Grid className="demo-grid" fullWidth>
            <Column lg={16} md={8} sm={4}>
              <p>
                Built with React, Vite, and IBM Carbon Design System (
                <code>@carbon/react</code>).
              </p>
            </Column>
          </Grid>
        </Tile>
      </Content>

      <Modal
        open={modalOpen}
        modalHeading="Confirm workflow save"
        modalLabel="Order Processing Pipeline"
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
        onRequestClose={() => setModalOpen(false)}
        onRequestSubmit={() => setModalOpen(false)}
      >
        <p>
          Saving this workflow will apply your changes to the staging
          environment. Teammates with edit access will be notified.
        </p>
      </Modal>
    </>
  );
}
